import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MenueModule } from './menu/menu.module';
import { ConentsModule } from './conents/conents.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mogo'),
    UsersModule,
    MenueModule,
    ConentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
