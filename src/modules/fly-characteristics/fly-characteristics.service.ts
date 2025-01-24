import { Injectable } from '@nestjs/common';
import { CreateFlyCharacteristicDto } from './dto/create-fly-characteristic.dto';
import { UpdateFlyCharacteristicDto } from './dto/update-fly-characteristic.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FlyCharacteristic } from './entities/fly-characteristic.entity';
import { Repository } from 'typeorm';
import { FlyGenus } from '../fly-genus/entities/fly-genus.entity';

@Injectable()
export class FlyCharacteristicsService {
  constructor(
    @InjectRepository(FlyCharacteristic)
    private flyCharacteristicRepository: Repository<FlyCharacteristic>,
    @InjectRepository(FlyGenus)
    private flyGenusRepository: Repository<FlyGenus>,
  ){}

  create(createFlyCharacteristicDto: CreateFlyCharacteristicDto) {
    return 'This action adds a new flyCharacteristic';
  }

  findAll() {
    return `This action returns all flyCharacteristics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flyCharacteristic`;
  }

  update(id: number, updateFlyCharacteristicDto: UpdateFlyCharacteristicDto) {
    return `This action updates a #${id} flyCharacteristic`;
  }

  remove(id: number) {
    return `This action removes a #${id} flyCharacteristic`;
  }
}
