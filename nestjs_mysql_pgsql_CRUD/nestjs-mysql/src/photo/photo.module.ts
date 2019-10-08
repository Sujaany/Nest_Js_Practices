import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Photo } from './photonest.entity';
import { PhotoRepository } from './photoRepository';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
