import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt } from './entities/receipt.entity';
import { ReceiptDocument } from 'schemas/receipt.schema';

@Injectable()
export class ReceiptService {
  constructor(
    @InjectModel(Receipt.name) private receiptModel: Model<ReceiptDocument>,
  ) {}

  async create(createReceiptDto: CreateReceiptDto): Promise<Receipt> {
    const createdReceipt = new this.receiptModel(createReceiptDto);
    return createdReceipt.save();
  }

  async findAll(): Promise<Receipt[]> {
    return this.receiptModel.find().exec();
  }

  async findOne(id: string): Promise<Receipt | null> {
    return this.receiptModel.findById(id).exec();
  }

  async update(id: string, updateReceiptDto: UpdateReceiptDto): Promise<Receipt | null> {
    return this.receiptModel.findByIdAndUpdate(id, updateReceiptDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Receipt | null> {
    return this.receiptModel.findByIdAndDelete(id).exec();
  }
}
