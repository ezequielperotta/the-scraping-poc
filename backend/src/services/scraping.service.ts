import { Mapper } from '@/core/mapper/Mapper';
import { CarrefourTaskService } from '@/tasks/CarrefourTaskService';
import { JumboTaskService } from '@/tasks/JumboTaskService';
import { LCCTaskService } from '@/tasks/LCCTaskService';
import { productToSearchList } from '@/data/ProductToSearchList';
import { ProductToSearch } from '@/types/product';
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

    //
    /*const response = [
        {
          product: "Mayonesa clasica Hellmanns 475g",
          sources: [{
            name: "Carrefour",
            price: "267.00",
            imgURL: "https://carrefourar.vtexassets.com/arquivos/ids/235913-800-450?v=637807284286870000&width=800&height=450&aspect=true"
          },
          {
            name: "La coope en casa",
            price: "279.00",
            imgURL: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/d/1/d/d1dde34e766e282fd5dd83dd5b9344bb"
          },
          {
            name: "Jumbo",
            price: "292.00",
            imgURL: "https://jumboargentina.vteximg.com.br/arquivos/ids/687731-1000-1000/Mayonesa-Hellmanns-Clasica-X237g-1-884275.jpg?v=637799529681900000"
          }],
          averagePrice: "279,33"
        },
        {
          product: "Leche entera clasica La serenisima x litro",
          sources:[{
            name: "Carrefour",
            price: "207.00",
            imgURL: "https://carrefourar.vtexassets.com/arquivos/ids/178242-600-338?v=637468578465300000&width=600&height=338&aspect=true"
          },
          {
            name: "La coope en casa",
            price: "190.00",
            imgURL: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/2/c/e/2ce8c9ca287270abec9f0538462ae521"
          },
           {
            name: "Jumbo",
            price: "207.79",
            imgURL: "https://jumboargentina.vteximg.com.br/arquivos/ids/580244-1000-1000/Leche-Entera-Clasica-La-Serenisima-Sachet-1-L-1-237861.jpg?v=637219129507200000"
          },
          averagePrice: "201,33"
        },
        {
          product: "Jamon Cocido Paladini reducido en sodio 150g",
          source: [{
            name: "Carrefour",
            price: "413.00",
            imgURL: "https://carrefourar.vtexassets.com/arquivos/ids/192412-800-450?v=637515948219870000&width=800&height=450&aspect=true"
          },
          {
            name: "La coope en casa",
            price: "350.00",
            imgURL: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/d/4/b/d4be7becf7904d57bcfe35bdfd1fa614"
          },
          {
            name: "Jumbo",
            price: "399.00",
            imgURL: "https://jumboargentina.vteximg.com.br/arquivos/ids/565566-1000-1000/Jamon-Cocido-Paladini-Reducido-En-Sodio-X-150g-1-838400.jpg?v=637124517073500000"
          }],
          averagePrice: "387,33"
        }
      ] */
    // return data;
  }

  public async getFilteredProducts(productsList: any[]) {
    const response = [];
    productToSearchList.forEach((productToSearch: ProductToSearch) => {
      const filteredProducts = productsList.filter(prod => prod.EAN === productToSearch.id);
      const productItem = {
        product: productToSearch.fullName,
        sources: filteredProducts,
      };
      response.push(productItem);
    });
    return response;
  }
}

export default ScrapingService;
