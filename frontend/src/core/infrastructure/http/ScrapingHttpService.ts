import { HttpClient } from './HttpClient';
import { Product } from '../../domain/Product';
import { ScrapingService } from '../../domain/ScrapingService';
import { Source } from '../../domain/types';

export class ScrapingHttpService implements ScrapingService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getProductList(): Promise<Product[]> {
    const response = await this.httpClient.get('/products');
    return Promise.resolve(this.toProductList(response.data.data));
  }

  private toProductList(data: Record<string, any>): Product[] {
    return data.map((product: Record<string, any>) => new Product(product.product, product.averagePrice.toFixed(2), product.sources[0].imageURL, product.sources));
  }
}

