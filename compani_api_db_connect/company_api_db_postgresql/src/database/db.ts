import { TypeOrmModule } from '@nestjs/typeorm';

// POSTGRESQL CONFIGURATION
const config= TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  schema: 'comDetails',
  database: 'company',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
})

// MYSQL CONFIGURATION
// add query in mysql --> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'manager'
// const config= TypeOrmModule.forRoot({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'manager',
//   database: 'company',
//   entities: ['dist/**/*.entity{.ts,.js}'],
//   synchronize: true,
// })

export default config;