import { Test, TestingModule } from '@nestjs/testing';
import { FlyCharacteristicsController } from './fly-characteristics.controller';
import { FlyCharacteristicsService } from './fly-characteristics.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FlyCharacteristic } from './entities/fly-characteristic.entity';
import { FlyGenus } from '../fly-genus/entities/fly-genus.entity';

describe('FlyCharacteristicsController', () => {
  let controller: FlyCharacteristicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlyCharacteristicsController],
      providers: [
        FlyCharacteristicsService,
        {
          provide: getRepositoryToken(FlyCharacteristic),
          useValue: {}, // Mock repository
        },
        {
          provide: getRepositoryToken(FlyGenus),
          useValue: {}, // Mock repository
        },
      ],
    }).compile();

    controller = module.get<FlyCharacteristicsController>(FlyCharacteristicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
