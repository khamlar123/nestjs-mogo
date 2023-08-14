import { RoleModule } from './role/role.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    RoleModule, MongooseModule.forRoot('mongodb://localhost:27017/demo'), UsersModule],
  controllers: [
     AppController],
  providers: [AppService],
})
export class AppModule { }
