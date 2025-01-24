import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyGenusModule } from './modules/fly-genus/fly-genus.module';
import { AppConfigModule } from './config/config.module';
import { FlyCharacteristicsModule } from './modules/fly-characteristics/fly-characteristics.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AppConfigModule,
    FlyCharacteristicsModule,
    FlyGenusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
