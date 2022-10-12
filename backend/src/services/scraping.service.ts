import FiambresCarrefour from './../data/Fiambres - Carrefour.json';
import MayonesasCarrefour from './../data/Mayonesa – Carrefourxlsx.json';
import LechesCarrefour from './../data/Leches - Carrefour.json';

import FiambresLccProducts from './../data/Fiambres - La Coope en Casa.json';
import MayonesasLccProducts from './../data/Mayonesa - La Coope en Casa.xlsx.json';
import LechesLccProducts from './../data/Leches - La Coope en Casa.json';

import FiambresJumbo from './../data/Fiambres – jumboargentina.json';
import MayonesasJumbo from './../data/Mayonesa – jumboargentina.json';
import LechesJumbo from './../data/Leches – jumboargentina.json';
import { products } from './../data/Products';
import { MarketPlaceItem } from '@/types/product';
import { ProductItem } from '@/types/product';

class ScrapingService {
  private listMarketPlace = ['Carrefour', 'LaCoppeEnCasa', 'Jumbo'];
  private listProducts = products;
  public buildGroupedDataByMarketplace() {
    const resultGropuData = [];

    this.listMarketPlace.forEach((marketPlace: string) => {
      const marketPlaceItem: MarketPlaceItem = {
        name: marketPlace,
        key: this.assaingKeySearch(marketPlace),
        products: this.concataData(marketPlace),
      };
      resultGropuData.push(marketPlaceItem);
    });

    return resultGropuData;
  }

  private concataData(marketPlace: string) {
    switch (marketPlace) {
      case 'Carrefour':
        return [].concat(FiambresCarrefour, MayonesasCarrefour, LechesCarrefour);
      case 'LaCoppeEnCasa':
        return [].concat(FiambresLccProducts, MayonesasLccProducts, LechesLccProducts);
      case 'Jumbo':
        return [].concat(FiambresJumbo, MayonesasJumbo, LechesJumbo);
    }
  }

  private assaingKeySearch(marketPlace: string) {
    switch (marketPlace) {
      case 'Carrefour':
        return ['Title', 'Summary'];
      case 'LaCoppeEnCasa':
        return ['Title', 'Title_URL', 'textcapitalize'];
      case 'Jumbo':
        return ['Title_URL'];
    }
  }

  private searchProducts(dataGroupByMarketplaces: any) {
    const resultGropuData = [];
    this.listMarketPlace.forEach((marketPlace: string) => {
      const marketplaceProducts = dataGroupByMarketplaces.find(
        (dataGroupByMarketplace: MarketPlaceItem) => dataGroupByMarketplace.name == marketPlace,
      );

      const marketPlaceItem: MarketPlaceItem = {
        name: marketPlace,
        key: this.assaingKeySearch(marketPlace),
        products: this.getProductsByNames(marketplaceProducts, marketplaceProducts.key, this.listProducts),
      };

      resultGropuData.push(marketPlaceItem);
    });

    return resultGropuData;
  }

  private getProductsByNames(data: any, key: string, listProducts: ProductItem[]) {
    const productsFilteredByName = [];
    listProducts.forEach((product: ProductItem) => {
      const productsByName = this.getProductsByCriteria(data.products, key, product.name);
      const productsByBrand = this.getProductsByCriteria(productsByName, key, product.brand);
      const productsByType = this.getProductsByCriteria(productsByBrand, key, product.type);
      productsFilteredByName.push(productsByType);
    });
    return productsFilteredByName.flat();
  }

  private normalizeNFD(word: string) {
    return word
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  private findTerms(product: any, name: string, key: string) {
    return (
      (product[key[0]] && this.normalizeNFD(product[key[0]]).includes(this.normalizeNFD(name))) ||
      (product[key[1]] && this.normalizeNFD(product[key[1]]).includes(this.normalizeNFD(name))) ||
      (product[key[2]] && this.normalizeNFD(product[key[2]]).includes(this.normalizeNFD(name)))
    );
  }

  private getProductsByCriteria(data: any, key: string, name: string) {
    const dataToParsed = [];
    data.forEach(product => {
      if (this.findTerms(product, name, key)) {
        dataToParsed.push(product);
      }
    });
    return dataToParsed;
  }

  public async getData(): Promise<any[]> {
    const dataGroupByMarketplaces = this.buildGroupedDataByMarketplace();
    const data = this.searchProducts(dataGroupByMarketplaces);
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
    return data;
  }
}

export default ScrapingService;
