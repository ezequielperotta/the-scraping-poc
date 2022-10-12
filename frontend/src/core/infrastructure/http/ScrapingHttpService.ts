import { HttpClient } from './HttpClient';
import { Product } from '../../domain/Product';
import { ScrapingService } from '../../domain/ScrapingService';
import { Source } from '../../domain/Source';

export class ScrapingHttpService implements ScrapingService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getProductList(): Promise<Product[]> {
    const response = await this.httpClient.get('scraping');
    return Promise.resolve(this.toProductList(response.data.data));
  }

  private toProductList(data: Record<string, any>): Product[] {
    return data.map((product: Record<string, any>) => {
      const sources: Source[] = [];
      const source1 = new Source(product.source1.name, product.source1.price, product.source1.imgURL);
      const source2 = new Source(product.source2.name, product.source2.price, product.source2.imgURL);
      const source3 = new Source(product.source3.name, product.source3.price, product.source3.imgURL);
      sources.push(source1);
      sources.push(source2);
      sources.push(source3);
      return new Product(product.product, product.averagePrice, sources);
    });
  }
}

