import { Product } from '@/core/domain/Product';

export abstract class ProductProcessor {
  private _rawProductName: string;
  private _product: Product;

  constructor(product: Product) {
    this._product = product;
    this._rawProductName = this._product.rawName;
  }

  abstract processName(): string;
  abstract processType(): string;
  abstract processBrand(): string;
  abstract processPackage(): string;
}
