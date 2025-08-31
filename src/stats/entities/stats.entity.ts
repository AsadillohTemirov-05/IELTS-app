import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Stat extends Document {
  @Prop({ required: true })
  icon: string;

  @Prop({ required: true })
  value: string;

  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  color: string;
}

export const StatSchema = SchemaFactory.createForClass(Stat);