import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }


      async findByPart(part: string): Promise<Course[]> {
    const courses = await this.courseModel.find({ part }).exec();
    if (!courses || courses.length === 0) {
      throw new NotFoundException(`No courses found for part: ${part}`);
    }
    return courses;
  }


  


  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const course = new this.courseModel(createCourseDto);
    return course.save();
  }

  async update(id: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
    const course = await this.courseModel.findByIdAndUpdate(id, updateCourseDto, { new: true });
    if (!course) {
      throw new NotFoundException('Course not found');
    }
    return course;
  }

  async remove(id: string): Promise<void> {
    const result = await this.courseModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException('Course not found');
    }
  }
}