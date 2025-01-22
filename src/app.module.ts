import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyGenus } from './fly-genus/entities/fly-genus.entity';
import { FlyGenusModule } from './fly-genus/fly-genus.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    //TypeOrmModule.forFeature([FlyGenus]),
    FlyGenusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
