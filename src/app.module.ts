import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StatsModule } from './stats/stats.module';
import { CoursesModule } from './courses/courses.module';
import { AuthModule } from './auth/auth.module';
import { databaseConfig } from './config/database.config';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonsModule } from './lessons/lessons.module';
import { CourseDetailModule } from './course-detail/course-detail.module';

@Module({

  imports: [
    MongooseModule.forRoot(databaseConfig.uri),
    UsersModule, StatsModule, CoursesModule, AuthModule, LessonsModule, CourseDetailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
