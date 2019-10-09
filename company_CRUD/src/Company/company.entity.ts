import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class CompanyEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:500})
    companyName: string;

    @Column('text')
    companyAddress:string;

    @Column('int')
    telNumber:number;
}