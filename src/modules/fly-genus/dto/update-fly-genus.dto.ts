import { PartialType } from '@nestjs/mapped-types';
import { CreateFlyGenusDto } from './create-fly-genus.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFlyGenusDto extends PartialType(CreateFlyGenusDto) {
  @ApiProperty({ example: 'Updated description', description: 'The description of the genus', required: false })
  description?: string;
}
