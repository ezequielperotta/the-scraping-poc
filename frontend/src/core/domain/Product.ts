import { Source } from './Source';

export class Product {
  private readonly _name: string = 'Conference call name';
  private readonly _date: Date = new Date();
  private readonly _averagePrice: string = '0.00';
  private readonly _sources: Source[] = [];

  constructor(name:string, price: string, sources: Source[]) {
    this._name = name;
    this._averagePrice = price;
    this._sources = sources;
  }

  get date(): Date {
    return this._date;
  }

  get name(): string {
    return this._name;
  }

  get averagePrice(): string {
    return this._averagePrice;
  }

  get sources(): Source[] {
    return this._sources;
  }
}
