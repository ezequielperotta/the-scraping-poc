import { SourceType } from '@/core/domain/types';
import { Product } from '@/core/domain/Product';
import { CarrefourProductBuilder } from '@/core/builders/CarrefourProductBuilder';
import { ProductBuilder } from '@/core/builders/ProductBuilder';
import { JumboProductBuilder } from '@/core/builders/JumboProductBuilder';
import { LCCProductBuilder } from '@/core/builders/LCCProductBuilder';

export class ProductBuilderDirector {
  build(source: SourceType, rawProduct: Record<string, any>): Product {
    let product: ProductBuilder;
    switch (source) {
      case 'Carrefour':
        product = new CarrefourProductBuilder(rawProduct);
        break;
      case 'Jumbo':
        product = new JumboProductBuilder(rawProduct);
        break;
      case 'La Cope en casa':
        product = new LCCProductBuilder(rawProduct);
        break;
    }

    return product.build();
  }
}
