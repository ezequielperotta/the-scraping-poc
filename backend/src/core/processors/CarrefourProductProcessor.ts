import { ProductProcessor } from '@/core/processors/ProductProcessor';

export class CarrefourProductProcessor extends ProductProcessor {
  processBrand(): string {
    return '';
  }

  processName(): string {
    return '';
  }

  processPackage(): string {
    return '';
  }

  processType(): string {
    return '';
  }
}
