import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
  @Prop({ required: true })
  name: string;
  
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  creationDate: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);