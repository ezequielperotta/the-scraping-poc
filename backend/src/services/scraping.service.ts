import { Mapper } from '@/core/mapper/Mapper';
import { CarrefourTaskService } from '@/tasks/CarrefourTaskService';

class ScrapingService {
  public async getData() {
    const taskID = '38976457863249856';
    const taskCarrefour = new CarrefourTaskService(taskID);
    const rawDataCarrefour = taskCarrefour.getData();
    const mapper = new Mapper(rawDataCarrefour, 'Carrefour');
    const products = mapper.getProducts();
    return products;
    // saveToLocalDataBase(products);

    /*const response = [
        {
          product: "Mayonesa clasica Hellmanns 475g",
          source1: {
            name: "Carrefour",
            price: "267.00",
            imgURL: "https://carrefourar.vtexassets.com/arquivos/ids/235913-800-450?v=637807284286870000&width=800&height=450&aspect=true"
          },
          source2: {
            name: "La coope en casa",
            price: "279.00",
            imgURL: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/d/1/d/d1dde34e766e282fd5dd83dd5b9344bb"
          },
          source3: {
            name: "Jumbo",
            price: "292.00",
            imgURL: "https://jumboargentina.vteximg.com.br/arquivos/ids/687731-1000-1000/Mayonesa-Hellmanns-Clasica-X237g-1-884275.jpg?v=637799529681900000"
          },
          averagePrice: "279,33"
        },
        {
          product: "Leche entera clasica La serenisima x litro",
          source1: {
            name: "Carrefour",
            price: "207.00",
            imgURL: "https://carrefourar.vtexassets.com/arquivos/ids/178242-600-338?v=637468578465300000&width=600&height=338&aspect=true"
          },
          source2: {
            name: "La coope en casa",
            price: "190.00",
            imgURL: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/2/c/e/2ce8c9ca287270abec9f0538462ae521"
          },
          source3: {
            name: "Jumbo",
            price: "207.79",
            imgURL: "https://jumboargentina.vteximg.com.br/arquivos/ids/580244-1000-1000/Leche-Entera-Clasica-La-Serenisima-Sachet-1-L-1-237861.jpg?v=637219129507200000"
          },
          averagePrice: "201,33"
        },
        {
          product: "Jamon Cocido Paladini reducido en sodio 150g",
          source1: {
            name: "Carrefour",
            price: "413.00",
            imgURL: "https://carrefourar.vtexassets.com/arquivos/ids/192412-800-450?v=637515948219870000&width=800&height=450&aspect=true"
          },
          source2: {
            name: "La coope en casa",
            price: "350.00",
            imgURL: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/d/4/b/d4be7becf7904d57bcfe35bdfd1fa614"
          },
          source3: {
            name: "Jumbo",
            price: "399.00",
            imgURL: "https://jumboargentina.vteximg.com.br/arquivos/ids/565566-1000-1000/Jamon-Cocido-Paladini-Reducido-En-Sodio-X-150g-1-838400.jpg?v=637124517073500000"
          },
          averagePrice: "387,33"
        }
      ] */
    // return data;
  }
}

export default ScrapingService;
