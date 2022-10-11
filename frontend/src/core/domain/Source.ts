export class Source {
  private readonly _name: string = 'Conference call name';
  private readonly _price: string = '0.00';
  private readonly _imageUrl: string = 'https://jumboargentina.vteximg.com.br/arquivos/ids/687731-1000-1000/Mayonesa-Hellmanns-Clasica-X237g-1-884275.jpg?v=637799529681900000';

  constructor(name:string, price: string, imageUrl:string) {
    this._name = name;
    this._price = price;
    this._imageUrl = imageUrl;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get name(): string {
    return this._name;
  }

  get price(): string {
    return this._price;
  }
}
