import { PartialType } from '@nestjs/mapped-types';
import { CreateFlyGenusDto } from './create-fly-genus.dto';


export class UpdateFlyGenusDto extends PartialType(CreateFlyGenusDto) {}
