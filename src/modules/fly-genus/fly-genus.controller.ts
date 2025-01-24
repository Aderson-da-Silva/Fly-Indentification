import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlyGenusService } from './fly-genus.service';
import { UpdateFlyGenusDto } from './dto/update-fly-genus.dto';
import { CreateFlyGenusDto } from './dto/create-fly-genus.dto';
import { FlyGenus } from './entities/fly-genus.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('fly-genus')
@Controller('fly-genus')
export class FlyGenusController {
  constructor(private readonly flyGenusService: FlyGenusService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new genus' })
  @ApiResponse({ status: 201, description: 'The genus has been successfully created.', type: FlyGenus })
  create(@Body() createFlyGenuDto: CreateFlyGenusDto): Promise<FlyGenus> {
    return this.flyGenusService.create(createFlyGenuDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all genera' })
  @ApiResponse({ status: 200, description: 'Return all genera.', type: [FlyGenus] })
  findAll(): Promise<FlyGenus[]> {
    return this.flyGenusService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a genus by ID' })
  @ApiResponse({ status: 200, description: 'Return the genus.', type: FlyGenus })
  findOne(@Param('id') id: string): Promise<FlyGenus| null> {
    return this.flyGenusService.findOne(id);
  }

  @Get('search/:txt')
  @ApiOperation({ summary: 'Search genera by name or description' })
  @ApiResponse({ status: 200, description: 'Return the matching genera.', type: [FlyGenus] })
  findByNameDesc(@Param('txt') txt: string): Promise<FlyGenus[]> {
    return this.flyGenusService.findByNameDesc(txt);
  }
  
  @Patch(':id')
  @ApiOperation({ summary: 'Update a genus by ID' })
  @ApiResponse({ status: 200, description: 'The genus has been successfully updated.', type: FlyGenus })
  update(@Param('id') id: string, @Body() updateFlyGenuDto: UpdateFlyGenusDto): Promise<FlyGenus | null> {
    return this.flyGenusService.update(id, updateFlyGenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flyGenusService.remove(id);
  }
}
