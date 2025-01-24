import { Module } from '@nestjs/common';
import { FlySpeciesService } from './fly-species.service';
import { FlySpeciesController } from './fly-species.controller';

@Module({
  controllers: [FlySpeciesController],
  providers: [FlySpeciesService],
})
export class FlySpeciesModule {}
