import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhotoModule } from './photo/photo.module';
import { Connection } from 'typeorm';
import config from "./db/db"
//import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    config,
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'root',
    //   schema: 'public',
    //   database: 'nesttest',
    //   entities: ['src/**/*.entity{.ts,.js}'],
    //   synchronize: true,
    // }),
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
