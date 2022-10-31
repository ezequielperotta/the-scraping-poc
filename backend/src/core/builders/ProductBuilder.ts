import { Product } from '@/core/domain/Product';

export abstract class ProductBuilder {
  protected _rawProduct: Record<string, any>;

  constructor(rawProduct: Record<string, any>) {
    this._rawProduct = rawProduct;
  }

  abstract build(): Product;
}
