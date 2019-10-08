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
import { PhotoEntity } from './photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}
  @Get()
  index(): Promise<PhotoEntity[]> {
    return this.photoService.findAll();
  }
  @Post()
  async create(@Body() photo: PhotoEntity): Promise<any> {
    return this.photoService.create(photo);
  }
  @Put(':id')
  async update(@Param('id') id, @Body() photo: PhotoEntity): Promise<any> {
    photo.id = Number(id);
    console.log('Update #' + photo.id);
    return this.photoService.update(photo);
  }
  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.photoService.delete(id);
  }
}
