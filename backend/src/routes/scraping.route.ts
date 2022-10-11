import { Router } from 'express';
import ScrapingController from '@/controllers/scraping.controller';
import { Routes } from '@interfaces/routes.interface';

class ScrapingRoute implements Routes {
  public path = '/scraping';
  public router = Router();
  public scrapingController = new ScrapingController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.scrapingController.getData);
  }
}

export default ScrapingRoute;