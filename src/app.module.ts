import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { SchemaModule } from './schema/schema.module'
import { CommonModule } from './common/common.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [SchemaModule, CommonModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'client'),
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
