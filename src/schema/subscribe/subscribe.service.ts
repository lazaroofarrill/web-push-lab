import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateSubscribeDto } from './dto/create-subscribe.dto'
import { UpdateSubscribeDto } from './dto/update-subscribe.dto'
import { InjectModel } from '@nestjs/mongoose'
import { SubscribeDocument, Subscription } from './entities/subscribe.entity'
import { Model } from 'mongoose'

@Injectable()
export class SubscribeService {
  constructor(@InjectModel(Subscription.name) private subscribeModel: Model<SubscribeDocument>) {
  }

  create(createSubscribeDto: CreateSubscribeDto) {
    console.log(createSubscribeDto)
    const createdModel = new this.subscribeModel(createSubscribeDto)
    return createdModel.save()
  }

  findAll() {
    throw new BadRequestException()
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriber`
  }

  update(id: number, updateSubscriberDto: UpdateSubscribeDto) {
    return `This action updates a #${id} subscriber`
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`
  }
}
