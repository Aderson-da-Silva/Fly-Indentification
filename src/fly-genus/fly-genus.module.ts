import { Module } from '@nestjs/common';
import { FlyGenusService } from './fly-genus.service';
import { FlyGenusController } from './fly-genus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyGenus } from './entities/fly-genus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlyGenus])],
  controllers: [FlyGenusController],
  providers: [FlyGenusService],
})
export class FlyGenusModule {}
