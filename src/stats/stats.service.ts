import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { Stat } from './entities/stats.entity';

@Injectable()
export class StatsService {
  constructor(@InjectModel(Stat.name) private statModel: Model<Stat>) {}

  async findAll(): Promise<Stat[]> {
    return this.statModel.find().exec();
  }

  async create(createStatDto: CreateStatDto): Promise<Stat> {
    const stat = new this.statModel(createStatDto);
    return stat.save();
  }

  async update(id: string, updateStatDto: UpdateStatDto): Promise<Stat> {
    const stat = await this.statModel.findByIdAndUpdate(id, updateStatDto, { new: true });
    if (!stat) {
      throw new NotFoundException('Stat not found');
    }
    return stat;
  }

  async remove(id: string): Promise<void> {
    const result = await this.statModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Stat not found');
    }
  }
}