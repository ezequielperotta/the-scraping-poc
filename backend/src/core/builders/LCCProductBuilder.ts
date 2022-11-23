import { Product } from '@/core/domain/Product';
import { ProductBuilder } from '@/core/builders/ProductBuilder';

export class LCCProductBuilder extends ProductBuilder {
  build(): Product {
    this.setProductTitle();
    this.setProductPrice();
    const product: Product = new Product(this.title, 'La coope en casa', this.price, this._rawProduct.Image);
    product.EAN = this.getEAN();
    return product;
  }

  private setProductTitle() {
    this.title = this._rawProduct.Title_URL;
  }

  private setProductPrice() {
    this.price = this._rawProduct.Price;
  }
}
