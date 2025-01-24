import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { AppConfigService } from './config.service';

describe('AppConfigService', () => {
  let service: AppConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppConfigService, ConfigService],
    }).compile();

    service = module.get<AppConfigService>(AppConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

//   it('should return the correct port', () => {
//     process.env.PORT = '3000'; // Defina a variável de ambiente PORT
//     expect(service.port).toBe(3000);
//   });

  // Adicione mais testes para os métodos do serviço aqui
});