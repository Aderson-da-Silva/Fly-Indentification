import { Module } from '@nestjs/common';
import { FlyGenusService } from './fly-genus.service';
import { FlyGenusController } from './fly-genus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyGenus } from './entities/fly-genus.entity';
import { FlyCharacteristic } from '../fly-characteristics/entities/fly-characteristic.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlyGenus, FlyCharacteristic])],
  controllers: [FlyGenusController],
  providers: [FlyGenusService],
})
export class FlyGenusModule {}
