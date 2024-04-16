import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDataModel(): string {
    const dataModel = {
      clients: {
        fields: ['name', 'firstName', 'email', 'creationDate'],
        relationships: ['invoices'],
      },
      invoices: {
        fields: ['clientReference', 'emissionDate', 'isPaid', 'paymentDate', 'price', 'products'],
        relationships: ['client', 'products'],
      },
      products: {
        fields: ['name', 'stock', 'photo', 'price'],
        relationships: ['invoices'],
      },
    };
    return JSON.stringify(dataModel);
  }
}
