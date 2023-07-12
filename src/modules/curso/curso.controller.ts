import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  @Get('all')
  findAllJoin() {
    return this.cursoService.findAllJoin();
  }

  @Get(':id')
  findOne(@Param('id') id: CreateCursoDto['id']) {
    return this.cursoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: CreateCursoDto['id'], @Body() body: UpdateCursoDto) {
    return this.cursoService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: CreateCursoDto['id']) {
    return this.cursoService.remove(id);
  }
}
