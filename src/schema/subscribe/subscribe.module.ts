import { Module } from '@nestjs/common';
import { SubscribeService } from './subscribe.service';
import { SubscribeController } from './subscribe.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Subscription, SubscribeSchema } from './entities/subscribe.entity';

const feature = MongooseModule.forFeature([{ name: Subscription.name, schema: SubscribeSchema }]);

@Module({
  imports: [feature],
  controllers: [SubscribeController],
  providers: [SubscribeService],
  exports: [feature],
})
export class SubscribeModule {
}
