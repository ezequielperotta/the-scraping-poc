import { Product } from '@/core/domain/Product';
import { ProductToSearch } from '@/types/product';
import { productToSearchList } from '@/data/ProductToSearchList';

export abstract class ProductBuilder {
  protected _rawProduct: Record<string, any>;
  protected _productToSearchList: ProductToSearch[];
  protected title: string;
  protected price: string;

  constructor(rawProduct: Record<string, any>) {
    this._rawProduct = rawProduct;
    this._productToSearchList = productToSearchList;
  }

  protected normalizeNFD(word: string) {
    console.log('WORD', word);
    return word
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  protected hasSameName(product: ProductToSearch): boolean {
    return this.normalizeNFD(this.title).includes(this.normalizeNFD(product.name));
  }

  protected hasSameBrand(product: ProductToSearch) {
    return this.normalizeNFD(this.title).includes(this.normalizeNFD(product.brand));
  }

  protected hasSamePackage(product: ProductToSearch) {
    return this.normalizeNFD(this.title).includes(this.normalizeNFD(product.package));
  }

  protected hasSameType(product: ProductToSearch): boolean {
    let found = false;
    product.type.forEach((type: string) => {
      if (!found)
        if (this.normalizeNFD(this.title).includes(this.normalizeNFD(type))) {
          found = true;
        }
    });
    return found;
  }

  protected getEAN(): string {
    let EAN = 'n/a';
    this._productToSearchList.forEach((product: ProductToSearch) => {
      if (this.hasSameName(product) && this.hasSameBrand(product) && this.hasSameType(product) && this.hasSamePackage(product)) {
        EAN = product.id;
      }
    });
    return EAN;
  }

  abstract build(): Product;
}
