import { Router } from 'express';
import ScrapingController from '@/controllers/scraping.controller';
import { Routes } from '@interfaces/routes.interface';
import cors from 'cors';

class ScrapingRoute implements Routes {
  public path = '/scraping';
  public router = Router();
  public scrapingController = new ScrapingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, cors(), this.scrapingController.getDataFromScraper);
    this.router.get(`${this.path}/products`, cors(), this.scrapingController.getProductList);
  }
}

export default ScrapingRoute;
