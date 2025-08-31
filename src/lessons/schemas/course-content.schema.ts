import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ContentItem {
  @Prop({ required: true })
  type: string; 

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  text: string;

  @Prop()
  icon?: string; 

  @Prop()
  color?: string; 
}

@Schema()
export class CourseContent extends Document {
  @Prop({ required: true, unique: true })
  part: string; 

  @Prop({ required: true })
  title: string; 

  @Prop({ type: [ContentItem], required: true })
  content: ContentItem[];
}

export const CourseContentSchema = SchemaFactory.createForClass(CourseContent);
export const ContentItemSchema = SchemaFactory.createForClass(ContentItem);