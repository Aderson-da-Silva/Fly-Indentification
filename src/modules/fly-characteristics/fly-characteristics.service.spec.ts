import { Test, TestingModule } from '@nestjs/testing';
import { FlyCharacteristicsService } from './fly-characteristics.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FlyCharacteristic } from './entities/fly-characteristic.entity';
import { FlyGenus } from '../fly-genus/entities/fly-genus.entity';

describe('FlyCharacteristicsService', () => {
  let service: FlyCharacteristicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
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

    service = module.get<FlyCharacteristicsService>(FlyCharacteristicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
