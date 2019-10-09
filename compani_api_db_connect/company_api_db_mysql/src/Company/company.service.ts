import {Injectable,Scope,Inject} from '@nestjs/common';
import {CompanyRepository} from '../Company/company.repository';
import {CompanyDto} from '../Company/company.dto';
import {CompanyEntity} from '../Company/company.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {UpdateResult,DeleteResult} from 'typeorm';

@Injectable({scope:Scope.REQUEST})
export class CompanyService{
    constructor(
        @InjectRepository(CompanyEntity)
        private readonly companyRepository:CompanyRepository,
    ){}
    findAll():Promise<CompanyDto[]>{
        return this.companyRepository.find();
    }
    create(companyDto:CompanyDto):Promise<CompanyDto>{
        return this.companyRepository.save(companyDto);
    }
    update(companyDto:CompanyDto):Promise<UpdateResult>{
        return this.companyRepository.update(companyDto.id,companyDto);
    }
    delete(id):Promise<DeleteResult>{
        return this.companyRepository.delete(id);
    }
}