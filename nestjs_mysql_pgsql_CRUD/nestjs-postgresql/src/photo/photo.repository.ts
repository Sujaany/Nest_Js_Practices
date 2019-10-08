import { Repository } from 'typeorm';

import { PhotoEntity } from './photo.entity';

export class PhotoRepository extends Repository<PhotoEntity> {}
