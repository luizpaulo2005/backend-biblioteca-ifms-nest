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
import { TypeMatricula } from 'src/dtos/matricula';

@Controller('matricula')
export class MatriculaController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll() {
    const select = await this.prisma.matricula.findMany();

    return select;
  }

  @Get('all')
  async getAllMatricula() {
    const select = await this.prisma.matricula.findMany({
      include: {
        discente: true,
        curso: true,
      },
    });

    return select;
  }

  @Get(':id')
  async getMatriculaById(@Param('id') id: string) {
    const select = await this.prisma.matricula.findUnique({
      where: {
        id: id,
      },
      include: {
        discente: true,
        curso: true,
      },
    });

    return select;
  }

  @Post()
  async createMatricula(@Body() body: TypeMatricula) {
    const { id, data_inicio, curso_id } = body;

    const data = new Date(data_inicio);

    const create = await this.prisma.matricula.create({
      data: {
        id,
        data_inicio: data,
        curso_id,
      },
    });

    return create;
  }

  @Put(':id')
  async updateMatricula(@Param('id') id: string, @Body() body: TypeMatricula) {
    const { data_inicio, curso_id } = body;

    const data = new Date(data_inicio);

    const update = await this.prisma.matricula.update({
      where: {
        id: id,
      },
      data: {
        id: body.id,
        data_inicio: data,
        curso_id,
      },
    });

    return update;
  }

  @Delete(':id')
  async deleteMatricula(@Param('id') id: string) {
    const del = await this.prisma.matricula.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
