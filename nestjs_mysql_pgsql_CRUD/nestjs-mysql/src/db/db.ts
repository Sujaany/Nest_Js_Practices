import { TypeOrmModule } from '@nestjs/typeorm';

const config= TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nesttest',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: true,
})
export default config;