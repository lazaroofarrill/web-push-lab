import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchemaModule } from './schema/schema.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [SchemaModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
