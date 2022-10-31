import { Product } from '@/core/domain/Product';
import { ProductBuilder } from '@/core/builders/ProductBuilder';

export class CarrefourProductBuilder extends ProductBuilder {
  build(): Product {
    const product: Product = new Product(this._rawProduct.Title, 'Carrefour');
    product.name = this.getProductName();
    product.type = this.getProductType();
    product.brand = this.getProductBrand();
    return product;
  }

  private getProductType() {
    return '';
  }

  private getProductName() {
    return '';
  }

  private getProductBrand() {
    return '';
  }
}
