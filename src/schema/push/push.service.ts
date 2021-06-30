import { Injectable } from '@nestjs/common'
import { CreatePushDto } from './dto/create-push.dto'
import { UpdatePushDto } from './dto/update-push.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { SubscribeDocument, Subscription } from '../subscribe/entities/subscribe.entity'
import { ConfigService } from '@nestjs/config'

import * as webPush from 'web-push'
import { RequestOptions } from 'web-push'

@Injectable()
export class PushService {
  constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<SubscribeDocument>,
              private configService: ConfigService,
  ) {
  }

  async create(createPushDto: CreatePushDto) {
    const payload = createPushDto
    const subscriptions: Subscription[] = await this.subscriptionModel.find()

    const parallelSubscriptionCalls = subscriptions.map((subscription) => {
      return new Promise((resolve, reject) => {
        const pushSubscription = new Subscription({
          endpoint: subscription.endpoint,
          keys: {
            p256dh: subscription.keys.p256dh,
            auth: subscription.keys.auth,
          },
        })

        const pushPayload = JSON.stringify(payload)
        const pushOptions: RequestOptions = {
          vapidDetails: {
            subject: 'http://example.com',
            privateKey: this.configService.get('VAPID_PRIVATE_KEY'),
            publicKey: this.configService.get('VAPID_PUBLIC_KEY'),
          },
          TTL: payload.ttl,
          headers: {},
        }
        webPush.sendNotification(
          pushSubscription,
          pushPayload,
          pushOptions,
        ).then((value) => {
          resolve({
            status: true,
            endpoint: subscription.endpoint,
            data: value,
          })
        }).catch((err) => {
          reject({
            status: false,
            endpoint: subscription.endpoint,
            data: err,
          })
        })
        Promise.all(parallelSubscriptionCalls).then((pushResults) => {
          console.info(pushResults)
        })
        return {
          data: 'Push triggered',
        }
      })
    })
  }

  findAll() {
    return `This action returns all push`
  }

  findOne(id: number) {
    return `This action returns a #${id} push`
  }

  update(id: number, updatePushDto: UpdatePushDto) {
    return `This action updates a #${id} push`
  }

  remove(id: number) {
    return `This action removes a #${id} push`
  }
}
