import { Injectable } from '@nestjs/common';

import { UpdateFlyGenusDto } from './dto/update-fly-genus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FlyGenus } from './entities/fly-genus.entity';
import { Repository } from 'typeorm';
import { CreateFlyGenusDto } from './dto/create-fly-genus.dto';
import { FlyCharacteristic } from 'src/modules/fly-characteristics/entities/fly-characteristic.entity';

@Injectable()
export class FlyGenusService {
  constructor(
    @InjectRepository(FlyGenus)
    private readonly flyGenusRepository: Repository<FlyGenus>,
    @InjectRepository(FlyCharacteristic)
    private readonly flyCharacteristic: Repository<FlyCharacteristic>
  ){}

  async create(createFlyGenuDto: CreateFlyGenusDto): Promise<FlyGenus> {
    const newGenus = this.flyGenusRepository.create(createFlyGenuDto);
    return this.flyGenusRepository.save(newGenus)
  }

  findAll(): Promise<FlyGenus[]> {
    return this.flyGenusRepository.find();
  }

  findOne(id: string): Promise<FlyGenus | null> {
    return this.flyGenusRepository.findOne({where:{id}});
  }

 async update(id: string, updateFlyGenusDto: UpdateFlyGenusDto): Promise<FlyGenus | null> {
     await this.flyGenusRepository.update(id, updateFlyGenusDto);
     return this.flyGenusRepository.findOne({where:{id}});
  }

  async remove(id: string): Promise<void> {
    await this.flyGenusRepository.delete(id);
  }
}
