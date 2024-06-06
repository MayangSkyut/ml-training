import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoController } from './to-do/to-do.controller';
import { ToDoService } from './to-do/to-do.service';
import { ToDoModule } from './to-do/to-do.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [ToDoModule, PrismaModule],
  controllers: [AppController, ToDoController],
  providers: [AppService, ToDoService],
})
export class AppModule {}
