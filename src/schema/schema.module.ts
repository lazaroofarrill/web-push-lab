import { Module } from '@nestjs/common';
import { SubscribeModule } from './subscribe/subscribe.module';
import { PushModule } from './push/push.module';

@Module({
  imports: [SubscribeModule, PushModule],
})
export class SchemaModule {
}
