import { Product } from '@/core/domain/Product';
import { ProductBuilder } from '@/core/builders/ProductBuilder';
import { ProductToSearch } from '@/types/product';

export class CarrefourProductBuilder extends ProductBuilder {
  build(): Product {
    const price = `${this._rawProduct.Price},${this._rawProduct.Price2}`;
    const product: Product = new Product(this._rawProduct.Title, 'Carrefour', price, this._rawProduct.Image);
    product.EAN = this.getEAN();
    return product;
  }

  private getEAN(): string {
    let EAN = 'n/a';
    this._productToSearchList.forEach((product: ProductToSearch) => {
      if (this.hasSameName(product) && this.hasSameBrand(product) && this.hasSameType(product) && this.hasSamePackage(product)) {
        EAN = product.id;
      }
    });
    return EAN;
  }

  private hasSameName(product: ProductToSearch): boolean {
    return this.normalizeNFD(this._rawProduct.Title).includes(product.name);
  }

  private hasSameBrand(product: ProductToSearch) {
    return this.normalizeNFD(this._rawProduct.Title).includes(product.brand);
  }

  private hasSameType(product: ProductToSearch): boolean {
    let found = false;
    product.type.forEach((type: string) => {
      if (!found)
        if (this.normalizeNFD(this._rawProduct.Title).includes(type)) {
          found = true;
        }
    });
    return found;
  }

  private hasSamePackage(product: ProductToSearch) {
    return this.normalizeNFD(this._rawProduct.Title).includes(product.name);
  }
}
