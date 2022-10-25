import { ProductProcessor } from '@/core/processors/ProductProcessor';
import { Product } from '@/core/domain/Product';

export class CarrefourProductProcessor extends ProductProcessor {
  protected processBrand() {
    this._product.type = 'Mayonesa';
  }

  protected processName() {}

  protected processPackage() {}

  protected processType() {}

  processProduct(): Product {
    return this._product;
  }
}
