import { NextFunction, Request, Response } from 'express';
import scrapingService from '@/services/scraping.service';
import { ResponseGenerator } from '@/core/ResponseGenerator';

class ScrapingController {
  public scrapingService = new scrapingService();

  public getDataFromScraper = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scrapingData = await this.scrapingService.getDataFromScraper();
      const responseGenerator = new ResponseGenerator(scrapingData);
      const products = await responseGenerator.getFilteredProducts();
      await this.scrapingService.setProductDB(products);
      res.status(200).json({ data: products, message: 'scraping' });
    } catch (error) {
      next(error);
    }
  };

  public getProductList = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.scrapingService.getProductsDB();
      res.status(200).json({ data: products, message: 'get products' });
    } catch (error) {
      next(error);
    }
  };
}

export default ScrapingController;
