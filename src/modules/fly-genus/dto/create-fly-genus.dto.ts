import { ApiProperty } from '@nestjs/swagger';

export class CreateFlyGenusDto {
  @ApiProperty({ example: 'Drosophila', description: 'The name of the genus' })
  name: string;

  @ApiProperty({ example: 'A genus of small flies', description: 'The description of the genus', required: false })
  description?: string;
}
