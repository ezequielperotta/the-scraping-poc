import { Product } from '@/core/domain/Product';
import { ProductBuilder } from '@/core/builders/ProductBuilder';

export class LCCProductBuilder extends ProductBuilder {
  build(): Product {
    this.setProductTitle();
    this.setProductPrice();
    const product: Product = new Product(
      this.title,
      'La coope en casa',
      this.price,
      this._rawProduct.Image || this._rawProduct.Image1 || this._rawProduct.card_URL,
    );
    product.EAN = this.getEAN();
    return product;
  }

  private setProductTitle() {
    this.title = this._rawProduct.Title || this._rawProduct.textcapitalize || this._rawProduct.Title1;
  }

  private setProductPrice() {
    this.price = this._rawProduct.Price || this._rawProduct.Price1;
  }
}
