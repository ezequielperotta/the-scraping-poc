import { Product } from '../domain/Product';
import { ScrapingService } from '../domain/ScrapingService';

export default class GetProductList {
  private service: ScrapingService;

  constructor(service: ScrapingService) {
    this.service = service;
  }

  async execute(): Promise<Product[]> {
    return await this.service.getProductList();
  }
}
