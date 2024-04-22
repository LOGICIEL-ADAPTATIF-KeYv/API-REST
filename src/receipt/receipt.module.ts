import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReceiptController } from './receipt.controller';
import { ReceiptService } from './receipt.service';
import { Receipt } from './entities/receipt.entity';
import { ReceiptSchema } from 'schemas/receipt.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Receipt.name, schema: ReceiptSchema }]),
  ],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptModule {}
