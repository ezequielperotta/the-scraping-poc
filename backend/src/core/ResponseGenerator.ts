import { productToSearchList } from '../data/ProductToSearchList';
import { ProductToSearch } from '../types/product';
import { Product } from './domain/Product';

export class ResponseGenerator {
  private readonly scrapingData: Product[];

  constructor(scrapingData: Product[]) {
    this.scrapingData = scrapingData;
  }

  public async getFilteredProducts() {
    const response = [];
    productToSearchList.forEach((productToSearch: ProductToSearch) => {
      const filteredProducts = this.getProductsByEAN(this.scrapingData, productToSearch);
      const productItem = this.buildProductItem(productToSearch, filteredProducts);
      response.push(productItem);
    });
    return response;
  }

  private buildProductItem(productToSearch: ProductToSearch, filteredProducts: any[]) {
    const productItem = {
      product: productToSearch.fullName,
      sources: this.buildProductSources(filteredProducts),
      averagePrice: this.buildAverage(filteredProducts),
    };
    return productItem;
  }

  private getProductsByEAN(productsList: any[], productToSearch: ProductToSearch) {
    return productsList.filter(prod => prod.EAN === productToSearch.id);
  }

  private buildProductSources(filteredProducts: any[]) {
    return filteredProducts.map((product: Product) => {
      return {
        name: product.source,
        price: product.price,
        imageURL: product.imageUrl,
      };
    });
  }

  private buildAverage(filteredProducts: any[]) {
    let average = 0;
    filteredProducts.forEach((product: Product) => {
      average += product.price;
    });
    return average / filteredProducts.length;
  }
}
