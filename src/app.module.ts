import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';
import { ReceiptModule } from './receipt/receipt.module';

@Module({
  imports: [ClientModule, ProductModule, ReceiptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
