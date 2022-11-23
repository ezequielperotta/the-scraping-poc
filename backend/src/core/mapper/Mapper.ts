import { ProductToSearch } from '@/types/product';
import { SourceType } from '@/core/domain/types';
import { Product } from '@/core/domain/Product';
import { ProductBuilderDirector } from '@/core/builders/ProductBuilderDirector';

export class Mapper {
  private readonly _rawData: Record<string, any>[] = [];
  private readonly _source: SourceType;
  private _productBuilderDirector: ProductBuilderDirector;

  constructor(rawData: Record<string, any>[], source: SourceType) {
    this._rawData = rawData;
    this._source = source;
    this._productBuilderDirector = new ProductBuilderDirector();
  }

  getProducts(): Product[] {
    return this._rawData.map((elem: Record<string, any>) => {
      return this._productBuilderDirector.build(this._source, elem);
    });
  }
}
