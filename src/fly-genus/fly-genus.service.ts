import { Injectable } from '@nestjs/common';

import { UpdateFlyGenusDto } from './dto/update-fly-genus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FlyGenus } from './entities/fly-genus.entity';
import { Repository } from 'typeorm';
import { CreateFlyGenusDto } from './dto/create-fly-genus.dto';

@Injectable()
export class FlyGenusService {
  constructor(
    @InjectRepository(FlyGenus)
    private readonly flyGenusRepository: Repository<FlyGenus>,
  ){}

  async create(createFlyGenuDto: CreateFlyGenusDto): Promise<FlyGenus> {
    const newGenus = this.flyGenusRepository.create(createFlyGenuDto);
    return this.flyGenusRepository.save(newGenus)
  }

  findAll(): Promise<FlyGenus[]> {
    return this.flyGenusRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} flyGenu`;
  }

  update(id: number, updateFlyGenuDto: UpdateFlyGenusDto) {
    return `This action updates a #${id} flyGenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} flyGenu`;
  }
}
