import { SourceType } from '@/core/domain/types';
import { Product } from '@/core/domain/Product';
import { CarrefourProductBuilder } from '@/core/builders/CarrefourProductBuilder';
import { ProductBuilder } from '@/core/builders/ProductBuilder';

export class ProductBuilderDirector {
  build(source: SourceType, rawProduct: Record<string, any>): Product {
    let product: ProductBuilder;
    switch (source) {
      case 'Carrefour':
        product = new CarrefourProductBuilder(rawProduct);
        break;
    }

    return product.build();
  }
}
