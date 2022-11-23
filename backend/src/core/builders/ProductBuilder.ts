import { Product } from '@/core/domain/Product';
import { ProductToSearch } from '@/types/product';
import { productToSearchList } from '@/data/ProductToSearchList';

export abstract class ProductBuilder {
  protected _rawProduct: Record<string, any>;
  protected _productToSearchList: ProductToSearch[];

  constructor(rawProduct: Record<string, any>) {
    this._rawProduct = rawProduct;
    this._productToSearchList = productToSearchList;
  }

  protected normalizeNFD(word: string) {
    return word
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  abstract build(): Product;
}
