/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Roles } from 'src/roles/roles.decorator';
// import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';
// import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  //   @Post()
  //   async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
  //     this.catsService.create(createCatDto);
  //   }

  @Post()
  @Roles(['admin'])
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  //   async findAll(): Promise<Cat[]> {
  //     return this.catsService.findAll();
  //   }
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
