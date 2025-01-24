import { PartialType } from '@nestjs/mapped-types';
import { CreateFlySpecyDto } from './create-fly-specy.dto';

export class UpdateFlySpecyDto extends PartialType(CreateFlySpecyDto) {}
