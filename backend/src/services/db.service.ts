import { isEmpty } from '@utils/util';
import { HttpException } from '@exceptions/HttpException';
import productModel from '@/models/products.model';

class ProductDBService {
  public products = productModel;

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

export default ProductDBService;
