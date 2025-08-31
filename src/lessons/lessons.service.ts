import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseQuestion } from './schemas/course-question.schema';
import { CourseContent } from './schemas/course-content.schema';
import { CourseTip } from './schemas/course-tip.schema';
import { CreateCourseQuestionDto, UpdateCourseQuestionDto } from './dto/course-question.dto';
import { CreateCourseContentDto, UpdateCourseContentDto } from './dto/course-content.dto';
import { CreateCourseTipDto, UpdateCourseTipDto } from './dto/course-tip.dto';

@Injectable()
export class LessonsService {
  constructor(
    @InjectModel(CourseQuestion.name) private questionModel: Model<CourseQuestion>,
    @InjectModel(CourseContent.name) private contentModel: Model<CourseContent>,
    @InjectModel(CourseTip.name) private tipModel: Model<CourseTip>,
  ) {}

  // Course Questions
  async createQuestion(createQuestionDto: CreateCourseQuestionDto): Promise<CourseQuestion> {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return createdQuestion.save();
  }

  async createQuestionsBulk(createQuestionDtos: CreateCourseQuestionDto[]): Promise<CourseQuestion[]> {
    return this.questionModel.insertMany(createQuestionDtos);
  }

  async findAllQuestions(): Promise<CourseQuestion[]> {
    return this.questionModel.find().exec();
  }

  async findQuestion(part: string): Promise<CourseQuestion | null> {
    return this.questionModel.findOne({ part }).exec();
  }

  async updateQuestion(part: string, updateQuestionDto: UpdateCourseQuestionDto): Promise<CourseQuestion | null> {
    return this.questionModel.findOneAndUpdate({ part }, updateQuestionDto, { new: true }).exec();
  }

  async deleteQuestion(part: string): Promise<CourseQuestion | null> {
    return this.questionModel.findOneAndDelete({ part }).exec();
  }

  // Course Content
  async createContent(createContentDto: CreateCourseContentDto): Promise<CourseContent> {
    const createdContent = new this.contentModel(createContentDto);
    return createdContent.save();
  }

  async createContentBulk(createContentDtos: CreateCourseContentDto[]): Promise<CourseContent[]> {
    return this.contentModel.insertMany(createContentDtos);
  }

  async findAllContent(): Promise<CourseContent[]> {
    return this.contentModel.find().exec();
  }

  async findContent(part: string): Promise<CourseContent | null> {
    return this.contentModel.findOne({ part }).exec();
  }

  async updateContent(part: string, updateContentDto: UpdateCourseContentDto): Promise<CourseContent | null> {
    return this.contentModel.findOneAndUpdate({ part }, updateContentDto, { new: true }).exec();
  }

  async deleteContent(part: string): Promise<CourseContent | null> {
    return this.contentModel.findOneAndDelete({ part }).exec();
  }

  // Course Tips
  async createTip(createTipDto: CreateCourseTipDto): Promise<CourseTip> {
    const createdTip = new this.tipModel(createTipDto);
    return createdTip.save();
  }

  async createTipsBulk(createTipDtos: CreateCourseTipDto[]): Promise<CourseTip[]> {
    return this.tipModel.insertMany(createTipDtos);
  }

  async findAllTips(): Promise<CourseTip[]> {
    return this.tipModel.find().exec();
  }

  async findTip(part: string): Promise<CourseTip | null> {
    return this.tipModel.findOne({ part }).exec();
  }

  async updateTip(part: string, updateTipDto: UpdateCourseTipDto): Promise<CourseTip | null> {
    return this.tipModel.findOneAndUpdate({ part }, updateTipDto, { new: true }).exec();
  }

  async deleteTip(part: string): Promise<CourseTip | null> {
    return this.tipModel.findOneAndDelete({ part }).exec();
  }
}