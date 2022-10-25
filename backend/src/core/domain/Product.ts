export class Product {
  private readonly _rawName: string = 'Mayonesa Hellmanns Clasica X475g';
  private readonly _source: string = 'Carrefour';
  private _brand: string;
  private _name: string;
  private _type: string;
  private _package: string;

  constructor(rawName: string, source: string) {
    this._rawName = rawName;
    this._source = source;
  }

  get rawName(): string {
    return this._rawName;
  }

  get source(): string {
    return this._source;
  }

  set name(value: string) {
    // Se setea en el preprocesador de producto
    this._name = value;
  }

  get name(): string {
    return this._name;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get brand(): string {
    return this._brand;
  }

  set type(value: string) {
    // Se setea en el preprocesador de producto
    this._type = value;
  }

  get type(): string {
    return this._type;
  }

  set package(value: string) {
    // Se setea en el preprocesador de producto
    this._package = value;
  }

  get package(): string {
    return this._package;
  }
}
