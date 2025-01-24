import { PartialType } from '@nestjs/mapped-types';
import { CreateFlyCharacteristicDto } from './create-fly-characteristic.dto';

export class UpdateFlyCharacteristicDto extends PartialType(CreateFlyCharacteristicDto) {}
