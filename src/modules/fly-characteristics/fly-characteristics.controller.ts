import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlyCharacteristicsService } from './fly-characteristics.service';
import { CreateFlyCharacteristicDto } from './dto/create-fly-characteristic.dto';
import { UpdateFlyCharacteristicDto } from './dto/update-fly-characteristic.dto';

@Controller('fly-characteristics')
export class FlyCharacteristicsController {
  constructor(private readonly flyCharacteristicsService: FlyCharacteristicsService) {}

  @Post()
  create(@Body() createFlyCharacteristicDto: CreateFlyCharacteristicDto) {
    return this.flyCharacteristicsService.create(createFlyCharacteristicDto);
  }

  @Get()
  findAll() {
    return this.flyCharacteristicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flyCharacteristicsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlyCharacteristicDto: UpdateFlyCharacteristicDto) {
    return this.flyCharacteristicsService.update(+id, updateFlyCharacteristicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flyCharacteristicsService.remove(+id);
  }
}
