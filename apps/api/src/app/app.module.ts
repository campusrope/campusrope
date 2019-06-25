import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import {environment} from '../environments/environment'

@Module({
  imports: [MongooseModule.forRoot(environment.db)],
  controllers: [AppController],
})
export class AppModule {}
