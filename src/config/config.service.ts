import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  get port() {
    return this.configService.get<number>('port');
  }

  get mongoConfig() {
    return this.configService.get('database.mongo');
  }

  get sqliteConfig() {
    return this.configService.get('database.sqlite');
  }
}