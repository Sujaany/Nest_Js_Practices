import {Repository} from 'typeorm';

import {CompanyEntity} from './company.entity';

export class CompanyRepository extends Repository<CompanyEntity>{}