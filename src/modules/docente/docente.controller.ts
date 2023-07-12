import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocenteService } from './docente.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';

@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @Post()
  create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docenteService.create(createDocenteDto);
  }

  @Get()
  findAll() {
    return this.docenteService.findAll();
  }

  @Get('all')
  findAllJoin() {
    return this.docenteService.findAllJoin();
  }

  @Get(':id')
  findOne(@Param('id') id: CreateDocenteDto['id']) {
    return this.docenteService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: CreateDocenteDto['id'],
    @Body() body: UpdateDocenteDto,
  ) {
    return this.docenteService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: CreateDocenteDto['id']) {
    return this.docenteService.remove(id);
  }
}
