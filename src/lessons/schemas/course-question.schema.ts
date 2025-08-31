import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class CourseQuestion extends Document {
  @Prop({ required: true, unique: true })
  part: string; 

  @Prop({ required: true })
  icon: string; 

  @Prop({ required: true })
  color: string; 

  @Prop({ required: true })
  subject: string; 

  @Prop({ required: true })
  question: string; 

  @Prop({ type: [String], required: true })
  options: string[]; 

  @Prop({ required: true })
  correctAnswer: number; 
}

export const CourseQuestionSchema = SchemaFactory.createForClass(CourseQuestion);