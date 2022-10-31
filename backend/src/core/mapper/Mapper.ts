import { ProductToSearch } from '@/types/product';
import { SourceType } from '@/core/domain/types';
import { Product } from '@/core/domain/Product';
import { ProductBuilderDirector } from '@/core/builders/ProductBuilderDirector';

export class Mapper {
  private readonly _rawData: Record<string, any>[] = [];
  private readonly _productSearchList: ProductToSearch[];
  private _source: SourceType;
  private _productBuilderDirector: ProductBuilderDirector;

  constructor(
    rawData: Record<string, any>[],
    productSearchList: ProductToSearch[],
    source: SourceType,
    productBuilderDirector: ProductBuilderDirector,
  ) {
    this._rawData = rawData;
    this._productSearchList = productSearchList;
    this._source = source;
    this._productBuilderDirector = productBuilderDirector;
  }

  getProducts(): Product[] {
    return this._rawData.map((elem: Record<string, any>) => {
      return this._productBuilderDirector.build(this._source, elem);
    });
  }
}
