import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photonest.entity';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  @Get()
  index(): Promise<Photo[]> {
    return this.photoService.findAll();
  }
  @Post()
  async create(@Body() photo: Photo): Promise<any> {
    return this.photoService.create(photo);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() photo: Photo): Promise<any> {
    photo.id = Number(id);
    console.log('Update #' + photo.id);
    return this.photoService.update(photo);
  }
  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.photoService.delete(id);
  }
}
