import { Module } from '@nestjs/common';
import { ServerStatusModule } from './server-status/server-status.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ServerStatusModule,
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {
}
