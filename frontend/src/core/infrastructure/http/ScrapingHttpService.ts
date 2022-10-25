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

    const data = [
      {
        'name': 'Mayonesa Hellmanns Clasica X475g.',
        'image': 'https://jumboargentina.vteximg.com.br/arquivos/ids/687730-230-230/Mayonesa-Hellmanns-Clasica-X475g-1-884274.jpg?v=637799529678000000',
        'average_price': '295',
        'sources': [{
          'name': 'Carrefour',
          'price': '289'
        },
        {
          'name': 'Jumbo',
          'price': '298'
        },
        {
          'name': 'La coope en casa',
          'price': '299'
        }
        ]
      },
    ];
    // const response = await this.httpClient.get('scraping');
    return Promise.resolve(this.toProductList(data));
  }

  private toProductList(data: Record<string, any>): Product[] {
    return data.map((product: Record<string, any>) => {
      const sources: Source[] = [];
      product.sources.map((source: Record<string, any>) => {
        return {
          name: source.name,
          price: source.price
        };
      });
      return new Product(product.name, product.average_price, product.image, sources);
    });
  }
}

