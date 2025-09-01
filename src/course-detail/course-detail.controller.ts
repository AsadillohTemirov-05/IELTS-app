import { Controller } from '@nestjs/common';
import { CourseDetailService } from './course-detail.service';

@Controller('course-detail')
export class CourseDetailController {
  constructor(private readonly courseDetailService: CourseDetailService) {}
}
