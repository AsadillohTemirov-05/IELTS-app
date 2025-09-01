import { Module } from '@nestjs/common';
import { CourseDetailService } from './course-detail.service';
import { CourseDetailController } from './course-detail.controller';

@Module({
  controllers: [CourseDetailController],
  providers: [CourseDetailService],
})
export class CourseDetailModule {}
