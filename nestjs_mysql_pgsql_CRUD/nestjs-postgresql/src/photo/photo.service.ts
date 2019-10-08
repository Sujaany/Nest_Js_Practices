import { Injectable, Scope, Inject } from '@nestjs/common';
import { PhotoRepository } from './photo.repository';
import { PhotoDto } from './photo.dto';
import { UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotoEntity } from './photo.entity';

@Injectable({ scope: Scope.REQUEST })
export class PhotoService {
  constructor(
    @InjectRepository(PhotoEntity)
    private readonly photoRepository: PhotoRepository,
  ) {}
  findAll(): Promise<PhotoDto[]> {
    return this.photoRepository.find();
  }
  create(photoDto: PhotoDto): Promise<PhotoDto> {
    return this.photoRepository.save(photoDto);
  }
  update(photoDto: PhotoDto): Promise<UpdateResult> {
    return this.photoRepository.update(photoDto.id, photoDto);
  }
  delete(id): Promise<DeleteResult> {
    return this.photoRepository.delete(id);
  }
}
