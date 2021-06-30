import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '../config/config.module';

const configService = new ConfigService();
const dbHost = configService.get('DATABASE_HOST');
const dbPort = configService.get('DATABASE_PORT');
const databaseModule = MongooseModule
  .forRoot(`mongodb://${dbHost}:${dbPort}/notifications`);

@Module({
  imports: [databaseModule, ConfigModule],
  exports: [databaseModule],
})
export class DatabaseModule {
}
