import { Photo } from './photonest.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Photo)
export class PhotoRepository extends Repository<Photo> {}
