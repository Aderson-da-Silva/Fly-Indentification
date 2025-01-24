import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlyGenusService } from './fly-genus.service';
import { UpdateFlyGenusDto } from './dto/update-fly-genus.dto';
import { CreateFlyGenusDto } from './dto/create-fly-genus.dto';
import { FlyGenus } from './entities/fly-genus.entity';

@Controller('fly-genus')
export class FlyGenusController {
  constructor(private readonly flyGenusService: FlyGenusService) {}

  @Post()
  create(@Body() createFlyGenuDto: CreateFlyGenusDto): Promise<FlyGenus> {
    return this.flyGenusService.create(createFlyGenuDto);
  }

  @Get()
  findAll(): Promise<FlyGenus[]> {
    return this.flyGenusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flyGenusService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlyGenuDto: UpdateFlyGenusDto) {
    return this.flyGenusService.update(id, updateFlyGenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flyGenusService.remove(id);
  }
}
