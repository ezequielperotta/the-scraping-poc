export class Product {
  private readonly _rawName: string = 'Mayonesa Hellmanns Clasica X475g';
  private readonly _source: string = 'Carrefour';
  private readonly _price: string;
  private readonly _imageUrl: string;
  private _EAN: string;

  constructor(rawName: string, source: string, price: string, imageUrl: string) {
    this._rawName = rawName;
    this._source = source;
    this._price = price;
    this._imageUrl = imageUrl;
  }

  get rawName(): string {
    return this._rawName;
  }

  get source(): string {
    return this._source;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get price(): string {
    return this._price;
  }

  get EAN(): string {
    return this._EAN;
  }

  set EAN(value: string) {
    this._EAN = value;
  }
}
