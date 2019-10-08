import { Injectable } from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { PhotoRepository } from './photoRepository';
import { PhotoDTO } from './photo.dto';

@Injectable()
export class PhotoService {
  constructor(private readonly photoRepository: PhotoRepository) {}
  findAll(): Promise<PhotoDTO[]> {
    return this.photoRepository.find();
  }
  create(photoDto: PhotoDTO): Promise<PhotoDTO> {
    return this.photoRepository.save(photoDto);
  }
  update(photoDto: PhotoDTO): Promise<UpdateResult> {
    return this.photoRepository.update(photoDto.id, photoDto);
  }
  delete(id): Promise<DeleteResult> {
    return this.photoRepository.delete(id);
  }
}
