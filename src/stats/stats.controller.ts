import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { StatsService } from './stats.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get()
  findAll() {
    return this.statsService.findAll();
  }

  
@Post()
async create(@Body() createStatDto: CreateStatDto) {
  return this.statsService.create(createStatDto);
}


  @Put(':id')
  @UseInterceptors(
    FileInterceptor('icon', {
      storage: diskStorage({
        destination: './uploads/icons',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
  )


  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStatDto: UpdateStatDto) {
  return this.statsService.update(id, updateStatDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statsService.remove(id);
  }
}