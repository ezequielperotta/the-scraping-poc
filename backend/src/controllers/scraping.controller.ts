import { NextFunction, Request, Response } from 'express';
import scrapingService from '@/services/scraping.service';

class ScrapingController {
  public scrapingService = new scrapingService();

  public getData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const scrapingData = await this.scrapingService.getData();
      const products = await this.scrapingService.getFilteredProducts(scrapingData);
      res.status(200).json({ data: products, message: 'scraping' });
    } catch (error) {
      next(error);
    }
  };
}

export default ScrapingController;
