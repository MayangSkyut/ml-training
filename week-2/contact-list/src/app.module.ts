import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactListModule } from './contact-list/contact-list.module';

@Module({
  imports: [ContactListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
