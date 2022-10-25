import { Source } from './types';

export class Product {
  private readonly _name: string = 'Conference call name';
  private readonly _date: Date = new Date();
  private readonly _averagePrice: string = '0.00';
  private readonly _sources: Source[] = [];
  private readonly _imageUrl: string = '';

  constructor(name:string, price: string, imageUrl: string,sources: Source[]) {
    this._name = name;
    this._averagePrice = price;
    this._sources = sources;
    this._imageUrl = imageUrl;
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

  get imageUrl(): string {
    return this._imageUrl;
  }
}
