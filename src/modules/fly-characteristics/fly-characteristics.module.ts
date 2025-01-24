import { Module } from '@nestjs/common';
import { FlyCharacteristicsService } from './fly-characteristics.service';
import { FlyCharacteristicsController } from './fly-characteristics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyCharacteristic } from './entities/fly-characteristic.entity';
import { FlyGenus } from '../fly-genus/entities/fly-genus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlyCharacteristic, FlyGenus])],
  controllers: [FlyCharacteristicsController],
  providers: [FlyCharacteristicsService],
})
export class FlyCharacteristicsModule {}
