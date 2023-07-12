import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiscenteService } from './discente.service';
import { CreateDiscenteDto } from './dto/create-discente.dto';
import { UpdateDiscenteDto } from './dto/update-discente.dto';

@Controller('discente')
export class DiscenteController {
  constructor(private readonly discenteService: DiscenteService) {}

  @Post()
  create(@Body() body: CreateDiscenteDto) {
    return this.discenteService.create(body);
  }

  @Get()
  findAll() {
    return this.discenteService.findAll();
  }

  @Get('all')
  findAllJoin() {
    return this.discenteService.findAllJoin();
  }

  @Get(':id')
  findOne(@Param('id') id: CreateDiscenteDto['id']) {
    return this.discenteService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: CreateDiscenteDto['id'],
    @Body() body: UpdateDiscenteDto,
  ) {
    return this.discenteService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: CreateDiscenteDto['id']) {
    return this.discenteService.remove(id);
  }
}
