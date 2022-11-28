import { Mapper } from '@/core/mapper/Mapper';
import { CarrefourTaskService } from '@/tasks/CarrefourTaskService';
import { JumboTaskService } from '@/tasks/JumboTaskService';
import { LCCTaskService } from '@/tasks/LCCTaskService';
import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';
import productModel from '@/models/products.model';

class ScrapingService {
  public products = productModel;

  public async getDataFromScraper() {
    const taskID = '38976457863249856';

    const taskCarrefour = new CarrefourTaskService(taskID);
    const rawDataCarrefour = taskCarrefour.getData();

    const taskJumbo = new JumboTaskService(taskID);
    const rawDataJumbo = taskJumbo.getData();

    const taskLCC = new LCCTaskService(taskID);
    const rawDataLCC = taskLCC.getData();

    const mapperCarrefour = new Mapper(rawDataCarrefour, 'Carrefour');
    const mapperLCC = new Mapper(rawDataLCC, 'La Cope en casa');
    const mapperJumbo = new Mapper(rawDataJumbo, 'Jumbo');

    const productsCarrefour = mapperCarrefour.getProducts();
    const productsJumbo = mapperJumbo.getProducts();
    const productsLCC = mapperLCC.getProducts();

    return [].concat(productsCarrefour).concat(productsJumbo).concat(productsLCC);
  }

  public async haveProductsDB() {
    return await this.products.countDocuments();
  }

  public async getProductsDB() {
    return await this.products.find();
  }

  public async setProductDB(products) {
    if (isEmpty(products)) throw new HttpException(400, 'Not data to saved');
    if ((await this.haveProductsDB()) == 0) {
      return await this.products.create(products);
    }
  }
}

export default ScrapingService;
