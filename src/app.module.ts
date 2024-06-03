import { Module } from '@nestjs/common';
import { ServerStatusModule } from './server-status/server-status.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    DatabaseModule,
    ServerStatusModule,
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {
}
