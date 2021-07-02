import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document, Schema as sc } from 'mongoose'

export type SubscribeDocument = Subscription & Document

@Schema({ timestamps: true })
export class Subscription {
  constructor({ endpoint, keys }) {
    this.endpoint = endpoint
    this.keys = keys
  }

  @Prop()
  endpoint: string

  @Prop({ type: sc.Types.Mixed })
  keys: any

  @Prop({ type: sc.Types.ObjectId })
  userId: string
}

export const SubscribeSchema = SchemaFactory.createForClass(Subscription)
