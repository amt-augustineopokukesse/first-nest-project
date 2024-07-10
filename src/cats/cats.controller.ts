import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  UseFilters,
  ForbiddenException,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception/http-exception.filter';
// import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(new HttpExceptionFilter())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(@Body() createCatDto: CreateCatDto) {
    // this.catsService.create(createCatDto);
    throw new ForbiddenException();
  }

  @Get()
  //   async findAll(): Promise<Cat[]> {
  //     return this.catsService.findAll();
  //   }
  async findAll() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
