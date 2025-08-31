import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { CourseQuestion, CourseQuestionSchema } from './schemas/course-question.schema';
import { CourseContent, CourseContentSchema } from './schemas/course-content.schema';
import { CourseTip, CourseTipSchema } from './schemas/course-tip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CourseQuestion.name, schema: CourseQuestionSchema },
      { name: CourseContent.name, schema: CourseContentSchema },
      { name: CourseTip.name, schema: CourseTipSchema },
    ]),
  ],
  controllers: [LessonsController],
  providers: [LessonsService],
})
export class LessonsModule {}