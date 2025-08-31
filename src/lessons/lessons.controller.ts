import { Controller, Get, Post, Patch, Delete, Body, Param, HttpCode } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { CreateCourseQuestionDto, UpdateCourseQuestionDto } from './dto/course-question.dto';
import { CreateCourseContentDto, UpdateCourseContentDto } from './dto/course-content.dto';
import { CreateCourseTipDto, UpdateCourseTipDto } from './dto/course-tip.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CourseQuestion } from './schemas/course-question.schema';
import { CourseContent } from './schemas/course-content.schema';
import { CourseTip } from './schemas/course-tip.schema';

@ApiTags('Lessons')
@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  // Course Questions
  @Post('questions')
  @ApiOperation({ summary: 'Create a new course question', description: 'Creates a single course question for a specific course part (e.g., reading, writing).' })
  @ApiBody({ type: CreateCourseQuestionDto })
  @ApiResponse({ status: 201, description: 'Course question created successfully.', type: CourseQuestion })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createQuestion(@Body() createQuestionDto: CreateCourseQuestionDto) {
    return this.lessonsService.createQuestion(createQuestionDto);
  }

  @Post('questions/bulk')
  @ApiOperation({ summary: 'Create multiple course questions', description: 'Creates multiple course questions in a single request.' })
  @ApiBody({ type: [CreateCourseQuestionDto] })
  @ApiResponse({ status: 201, description: 'Course questions created successfully.', type: [CourseQuestion] })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createQuestionsBulk(@Body() createQuestionDtos: CreateCourseQuestionDto[]) {
    return this.lessonsService.createQuestionsBulk(createQuestionDtos);
  }

  @Get('questions')
  @ApiOperation({ summary: 'Get all course questions', description: 'Retrieves a list of all course questions.' })
  @ApiResponse({ status: 200, description: 'List of course questions.', type: [CourseQuestion] })
  async findAllQuestions() {
    return this.lessonsService.findAllQuestions();
  }

  @Get('questions/:part')
  @ApiOperation({ summary: 'Get a course question by part', description: 'Retrieves a single course question by its part identifier (e.g., reading, writing).' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiResponse({ status: 200, description: 'Course question found.', type: CourseQuestion })
  @ApiResponse({ status: 404, description: 'Course question not found.' })
  async findQuestion(@Param('part') part: string) {
    return this.lessonsService.findQuestion(part);
  }

  @Patch('questions/:part')
  @ApiOperation({ summary: 'Update a course question', description: 'Updates a course question by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiBody({ type: UpdateCourseQuestionDto })
  @ApiResponse({ status: 200, description: 'Course question updated successfully.', type: CourseQuestion })
  @ApiResponse({ status: 404, description: 'Course question not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async updateQuestion(@Param('part') part: string, @Body() updateQuestionDto: UpdateCourseQuestionDto) {
    return this.lessonsService.updateQuestion(part, updateQuestionDto);
  }

  @Delete('questions/:part')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete a course question', description: 'Deletes a course question by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiResponse({ status: 204, description: 'Course question deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Course question not found.' })
  async deleteQuestion(@Param('part') part: string) {
    return this.lessonsService.deleteQuestion(part);
  }

  // Course Content
  @Post('content')
  @ApiOperation({ summary: 'Create a new course content', description: 'Creates a single course content entry for a specific course part.' })
  @ApiBody({ type: CreateCourseContentDto })
  @ApiResponse({ status: 201, description: 'Course content created successfully.', type: CourseContent })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createContent(@Body() createContentDto: CreateCourseContentDto) {
    return this.lessonsService.createContent(createContentDto);
  }

  @Post('content/bulk')
  @ApiOperation({ summary: 'Create multiple course content entries', description: 'Creates multiple course content entries in a single request.' })
  @ApiBody({ type: [CreateCourseContentDto] })
  @ApiResponse({ status: 201, description: 'Course content entries created successfully.', type: [CourseContent] })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createContentBulk(@Body() createContentDtos: CreateCourseContentDto[]) {
    return this.lessonsService.createContentBulk(createContentDtos);
  }

  @Get('content')
  @ApiOperation({ summary: 'Get all course content', description: 'Retrieves a list of all course content entries.' })
  @ApiResponse({ status: 200, description: 'List of course content entries.', type: [CourseContent] })
  async findAllContent() {
    return this.lessonsService.findAllContent();
  }

  @Get('content/:part')
  @ApiOperation({ summary: 'Get course content by part', description: 'Retrieves a single course content entry by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiResponse({ status: 200, description: 'Course content found.', type: CourseContent })
  @ApiResponse({ status: 404, description: 'Course content not found.' })
  async findContent(@Param('part') part: string) {
    return this.lessonsService.findContent(part);
  }

  @Patch('content/:part')
  @ApiOperation({ summary: 'Update course content', description: 'Updates a course content entry by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiBody({ type: UpdateCourseContentDto })
  @ApiResponse({ status: 200, description: 'Course content updated successfully.', type: CourseContent })
  @ApiResponse({ status: 404, description: 'Course content not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async updateContent(@Param('part') part: string, @Body() updateContentDto: UpdateCourseContentDto) {
    return this.lessonsService.updateContent(part, updateContentDto);
  }

  @Delete('content/:part')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete course content', description: 'Deletes a course content entry by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiResponse({ status: 204, description: 'Course content deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Course content not found.' })
  async deleteContent(@Param('part') part: string) {
    return this.lessonsService.deleteContent(part);
  }

  // Course Tips
  @Post('tips')
  @ApiOperation({ summary: 'Create a new course tip', description: 'Creates a single course tip entry for a specific course part.' })
  @ApiBody({ type: CreateCourseTipDto })
  @ApiResponse({ status: 201, description: 'Course tip created successfully.', type: CourseTip })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createTip(@Body() createTipDto: CreateCourseTipDto) {
    return this.lessonsService.createTip(createTipDto);
  }

  @Post('tips/bulk')
  @ApiOperation({ summary: 'Create multiple course tips', description: 'Creates multiple course tip entries in a single request.' })
  @ApiBody({ type: [CreateCourseTipDto] })
  @ApiResponse({ status: 201, description: 'Course tips created successfully.', type: [CourseTip] })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createTipsBulk(@Body() createTipDtos: CreateCourseTipDto[]) {
    return this.lessonsService.createTipsBulk(createTipDtos);
  }

  @Get('tips')
  @ApiOperation({ summary: 'Get all course tips', description: 'Retrieves a list of all course tip entries.' })
  @ApiResponse({ status: 200, description: 'List of course tips.', type: [CourseTip] })
  async findAllTips() {
    return this.lessonsService.findAllTips();
  }

  @Get('tips/:part')
  @ApiOperation({ summary: 'Get course tips by part', description: 'Retrieves a single course tip entry by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiResponse({ status: 200, description: 'Course tip found.', type: CourseTip })
  @ApiResponse({ status: 404, description: 'Course tip not found.' })
  async findTip(@Param('part') part: string) {
    return this.lessonsService.findTip(part);
  }

  @Patch('tips/:part')
  @ApiOperation({ summary: 'Update course tips', description: 'Updates a course tip entry by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiBody({ type: UpdateCourseTipDto })
  @ApiResponse({ status: 200, description: 'Course tip updated successfully.', type: CourseTip })
  @ApiResponse({ status: 404, description: 'Course tip not found.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async updateTip(@Param('part') part: string, @Body() updateTipDto: UpdateCourseTipDto) {
    return this.lessonsService.updateTip(part, updateTipDto);
  }

  @Delete('tips/:part')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete course tips', description: 'Deletes a course tip entry by its part identifier.' })
  @ApiParam({ name: 'part', description: 'Course part identifier (e.g., reading, writing)', type: String })
  @ApiResponse({ status: 204, description: 'Course tip deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Course tip not found.' })
  async deleteTip(@Param('part') part: string) {
    return this.lessonsService.deleteTip(part);
  }
}