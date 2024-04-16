import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: Number, required: true })
  stock: number;

  @Prop({ type: String })
  photo: string;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: [{ type: String, ref: 'Receipt' }] })
  invoices: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
