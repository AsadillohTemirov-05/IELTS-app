import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { Stat, StatSchema } from './entities/stats.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Stat.name, schema: StatSchema }])],
  providers: [StatsService],
  controllers: [StatsController],
})
export class StatsModule {}