import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export type SubscribeDocument = Subscription & Document

@Schema({ timestamps: true })
export class Subscription {
  constructor({ endpoint, keys }) {
    this.endpoint = endpoint;
    this.keys = keys;
  }

  @Prop()
  endpoint: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  keys: any;
}

export const SubscribeSchema = SchemaFactory.createForClass(Subscription);
