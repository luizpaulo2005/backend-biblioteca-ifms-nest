import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';

@Controller('matricula')
export class MatriculaController {
  constructor(private readonly matriculaService: MatriculaService) {}

  @Post()
  create(@Body() body: CreateMatriculaDto) {
    return this.matriculaService.create(body);
  }

  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }

  @Get('all')
  findAllJoin() {
    return this.matriculaService.findAllJoin();
  }

  @Get(':id')
  findOne(@Param('id') id: CreateMatriculaDto['id']) {
    return this.matriculaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: CreateMatriculaDto['id'],
    @Body() body: UpdateMatriculaDto,
  ) {
    return this.matriculaService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: CreateMatriculaDto['id']) {
    return this.matriculaService.remove(id);
  }
}
