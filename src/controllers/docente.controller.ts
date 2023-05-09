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
import { TypeDocente } from 'src/dtos/docente';

@Controller('docente')
export class DocenteController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getDocente() {
    const select = await this.prisma.docente.findMany();

    return select;
  }

  @Get('all')
  async getDocenteAll() {
    const select = await this.prisma.docente.findMany({
      include: {
        pesquisas: true,
      },
    });

    return select;
  }

  @Get(':id')
  async getDocenteById(@Param('id') id: string) {
    const select = await this.prisma.docente.findUnique({
      where: {
        id: id,
      },
      include: {
        pesquisas: true,
      },
    });

    return select;
  }

  @Post()
  async createDocente(@Body() body: TypeDocente) {
    const { nome, siape, email, data_nascimento, cpf, formacao } = body;

    const data = new Date(data_nascimento);

    const create = await this.prisma.docente.create({
      data: {
        nome,
        siape,
        email,
        data_nascimento: data,
        cpf,
        formacao,
      },
    });

    return create;
  }

  @Put(':id')
  async updateDocente(@Param('id') id: string, @Body() body: TypeDocente) {
    const { nome, siape, email, data_nascimento, cpf, formacao } = body;

    const data = new Date(data_nascimento);

    const update = await this.prisma.docente.update({
      where: {
        id: id,
      },
      data: {
        nome,
        siape,
        email,
        data_nascimento: data,
        cpf,
        formacao,
      },
    });

    return update;
  }

  @Delete(':id')
  async deleteDocente(@Param('id') id: string) {
    const del = await this.prisma.docente.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
