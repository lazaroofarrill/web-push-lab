import { Module } from '@nestjs/common';
import { ConfigModule as upstream } from '@nestjs/config';

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const customConfig = upstream.forRoot({
  envFilePath: [`envs/${ENV}/.database.env`, `envs/${ENV}/.keys.env`],
  isGlobal: true,
});

@Module({
  imports: [customConfig],
  exports: [customConfig],
})
export class ConfigModule {
}
