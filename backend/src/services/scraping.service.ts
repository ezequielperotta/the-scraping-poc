import { Mapper } from '@/core/mapper/Mapper';
import { CarrefourTaskService } from '@/tasks/CarrefourTaskService';
import { JumboTaskService } from '@/tasks/JumboTaskService';
import { LCCTaskService } from '@/tasks/LCCTaskService';

class ScrapingService {
  public async getData() {
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
    // saveToLocalDataBase(products);
  }
}

export default ScrapingService;
