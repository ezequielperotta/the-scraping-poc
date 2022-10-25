import { Product } from '@/core/domain/Product';

export abstract class ProductProcessor {
  protected _rawProductName: string;
  protected _product: Product;

  constructor(product: Product) {
    this._product = product;
    this._rawProductName = this._product.rawName;
  }

  protected abstract processName();
  protected abstract processType();
  protected abstract processBrand();
  protected abstract processPackage();
  abstract processProduct(): Product;
}
