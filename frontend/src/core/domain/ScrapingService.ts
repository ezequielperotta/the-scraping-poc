import { Product } from './Product';

export interface ScrapingService {
  getProductList(): Promise<Product[]>;
}
