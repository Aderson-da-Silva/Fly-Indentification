import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlySpeciesService } from './fly-species.service';
import { CreateFlySpecyDto } from './dto/create-fly-specy.dto';
import { UpdateFlySpecyDto } from './dto/update-fly-specy.dto';

@Controller('fly-species')
export class FlySpeciesController {
  constructor(private readonly flySpeciesService: FlySpeciesService) {}

  @Post()
  create(@Body() createFlySpecyDto: CreateFlySpecyDto) {
    return this.flySpeciesService.create(createFlySpecyDto);
  }

  @Get()
  findAll() {
    return this.flySpeciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flySpeciesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlySpecyDto: UpdateFlySpecyDto) {
    return this.flySpeciesService.update(+id, updateFlySpecyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flySpeciesService.remove(+id);
  }
}
