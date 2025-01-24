import { Test, TestingModule } from '@nestjs/testing';
import { FlySpeciesController } from './fly-species.controller';
import { FlySpeciesService } from './fly-species.service';

describe('FlySpeciesController', () => {
  let controller: FlySpeciesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlySpeciesController],
      providers: [FlySpeciesService],
    }).compile();

    controller = module.get<FlySpeciesController>(FlySpeciesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
