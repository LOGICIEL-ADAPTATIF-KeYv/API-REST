// app.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDataModel(): string {

    const dataModel = {
      clients: {
        fields: ['name', 'firstName', 'email', 'creationDate'],
        relationships: ['receipts'],
      },
      receipts: {
        fields: ['clientReference', 'emissionDate', 'isPaid', 'paymentDate', 'price', 'products'],
        relationships: ['client', 'products'],
      },
      products: {
        fields: ['name', 'stock', 'photo', 'price'],
        relationships: ['receipts'],
      },
    };
    return JSON.stringify(dataModel);
  }
}
