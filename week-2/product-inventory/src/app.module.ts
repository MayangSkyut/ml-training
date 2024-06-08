import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductInventoryModule } from './product-inventory/product-inventory.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProductInventoryModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
