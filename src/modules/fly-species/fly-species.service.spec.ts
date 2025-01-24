import { Test, TestingModule } from '@nestjs/testing';
import { FlySpeciesService } from './fly-species.service';

describe('FlySpeciesService', () => {
  let service: FlySpeciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlySpeciesService],
    }).compile();

    service = module.get<FlySpeciesService>(FlySpeciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
