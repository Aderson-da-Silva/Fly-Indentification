import { Test, TestingModule } from '@nestjs/testing';
import { FlyCharacteristicsController } from './fly-characteristics.controller';
import { FlyCharacteristicsService } from './fly-characteristics.service';

describe('FlyCharacteristicsController', () => {
  let controller: FlyCharacteristicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlyCharacteristicsController],
      providers: [FlyCharacteristicsService],
    }).compile();

    controller = module.get<FlyCharacteristicsController>(FlyCharacteristicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
