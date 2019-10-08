import { TypeOrmModule } from '@nestjs/typeorm';

const config= TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  schema: 'public',
  database: 'nesttest',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: true,
})
export default config;