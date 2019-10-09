import {Controller,Get,Post,Body,Put,Param,Delete} from '@nestjs/common';
import {CompanyService} from '../Company/company.service';
import {CompanyEntity} from '../Company/company.entity';

@Controller('comp')
export class CompanyController{
    constructor(private companyService :CompanyService){}

    @Get()
    index(): Promise<CompanyEntity[]>{
        return this.companyService.findAll();
    }
    @Post()
    async create(@Body() company:CompanyEntity):Promise<any>{
        return this.companyService.create(company);
    }
    @Put()
    async update(@Param('id') id, @Body() company:CompanyEntity):Promise<any>{
        company.id=Number(id);
        console.log('Update #' + company.id);
        return this.companyService.update(company);
    }
    @Delete(':id')
    async delete(@Param('id') id):Promise<any>{
        return this.companyService.delete(id);
    }

}