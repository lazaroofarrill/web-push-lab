import { Module } from '@nestjs/common';
import { PushService } from './push.service';
import { PushController } from './push.controller';
import { SubscribeModule } from '../subscribe/subscribe.module';

@Module({
  imports: [SubscribeModule],
  controllers: [PushController],
  providers: [PushService],
})
export class PushModule {
}
