import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TypeCurso } from 'src/dtos/curso';

@Controller('curso')
export class CursoController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getCurso() {
    const select = await this.prisma.curso.findMany();

    return select;
  }

  @Get('all')
  async getCursoAll() {
    const select = await this.prisma.curso.findMany({
      include: {
        campus: true,
        pesquisas: true,
      },
    });

    return select;
  }

  @Get(':id')
  async getCursoById(@Param('id') id: string) {
    const select = await this.prisma.curso.findUnique({
      where: {
        id: id,
      },
      include: {
        campus: true,
        pesquisas: true,
      },
    });

    return select;
  }

  @Post()
  async createCurso(@Body() body: TypeCurso) {
    const { nome, grade, duracao, campus_id } = body;

    const create = await this.prisma.curso.create({
      data: {
        nome,
        grade,
        duracao,
        campus_id,
      },
    });

    return create;
  }

  @Put(':id')
  async updateCurso(@Param('id') id: string, @Body() body: TypeCurso) {
    const { nome, grade, duracao, campus_id } = body;

    const update = await this.prisma.curso.update({
      where: {
        id: id,
      },
      data: {
        nome,
        grade,
        duracao,
        campus_id,
      },
    });

    return update;
  }

  @Delete(':id')
  async deleteCurso(@Param('id') id: string) {
    const del = await this.prisma.curso.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
