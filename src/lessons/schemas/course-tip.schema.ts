import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tip {
  @Prop({ required: true })
  number: string; // e.g., "01"

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  icon: string; 

  @Prop({ required: true })
  color: string; 
}

@Schema()
export class CourseTip extends Document {
  @Prop({ required: true, unique: true })
  part: string; 

  @Prop({ required: true })
  title: string; 

  @Prop({ type: [Tip], required: true })
  tips: Tip[];
}

export const CourseTipSchema = SchemaFactory.createForClass(CourseTip);
export const TipSchema = SchemaFactory.createForClass(Tip);