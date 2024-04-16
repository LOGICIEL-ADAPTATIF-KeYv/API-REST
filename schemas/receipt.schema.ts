import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReceiptDocument = HydratedDocument<Receipt>;

@Schema()
export class Receipt {
  @Prop({ type: String, required: true })
  clientReference: string;

  @Prop({ type: Date, required: true })
  emissionDate: Date;

  @Prop({ type: Boolean, required: true, default: false })
  isPaid: boolean;

  @Prop({ type: Date })
  paymentDate: Date;

  @Prop({ type: Number, required: true })
  price: number;

  @Prop({ type: [{ type: String, ref: 'Produit' }] })
  products: string[];
}

export const ReceiptSchema = SchemaFactory.createForClass(Receipt);
