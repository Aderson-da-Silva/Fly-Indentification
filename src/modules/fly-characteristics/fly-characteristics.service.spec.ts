import { Test, TestingModule } from '@nestjs/testing';
import { FlyCharacteristicsService } from './fly-characteristics.service';

describe('FlyCharacteristicsService', () => {
  let service: FlyCharacteristicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlyCharacteristicsService],
    }).compile();

    service = module.get<FlyCharacteristicsService>(FlyCharacteristicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
