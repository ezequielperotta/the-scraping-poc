import { model, Schema, Document } from 'mongoose';
import { Product } from '@/interfaces/products.interface';

const source = new Schema({ name: String, price: Number, imageURL: String });

const productSchema: Schema = new Schema({
  product: String,
  sources: [source],
  averagePrice: Number,
});

const productModel = model<Product & Document>('Product', productSchema);

export default productModel;
