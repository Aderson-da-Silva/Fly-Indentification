import { Injectable } from '@nestjs/common';
import { CreateFlySpecyDto } from './dto/create-fly-specy.dto';
import { UpdateFlySpecyDto } from './dto/update-fly-specy.dto';

@Injectable()
export class FlySpeciesService {
  create(createFlySpecyDto: CreateFlySpecyDto) {
    return 'This action adds a new flySpecy';
  }

  findAll() {
    return `This action returns all flySpecies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flySpecy`;
  }

  update(id: number, updateFlySpecyDto: UpdateFlySpecyDto) {
    return `This action updates a #${id} flySpecy`;
  }

  remove(id: number) {
    return `This action removes a #${id} flySpecy`;
  }
}
