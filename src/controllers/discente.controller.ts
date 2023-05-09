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
import { TypeDiscente } from 'src/dtos/discente';

@Controller('discente')
export class DiscenteController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getAll() {
    const select = await this.prisma.discente.findMany();

    return select;
  }

  @Get('all')
  async getAllDiscente() {
    const select = await this.prisma.discente.findMany({
      include: {
        matricula: true,
        pesquisas: true,
      },
    });

    return select;
  }

  @Get(':id')
  async getDiscenteById(@Param('id') id: string) {
    const select = await this.prisma.discente.findUnique({
      where: {
        id: id,
      },
      include: {
        matricula: true,
        pesquisas: true,
      },
    });

    return select;
  }

  @Post()
  async createDiscente(@Body() body: TypeDiscente) {
    const { nome, matricula_id, data_nascimento, cpf, email } = body;

    const data = new Date(data_nascimento);

    const create = await this.prisma.discente.create({
      data: {
        nome,
        email,
        cpf,
        data_nascimento: data,
        matricula_id,
      },
    });

    return create;
  }

  @Put(':id')
  async updateDiscente(@Param('id') id: string, @Body() body: TypeDiscente) {
    const { nome, matricula_id, data_nascimento, cpf, email } = body;

    const data = new Date(data_nascimento);

    const update = await this.prisma.discente.update({
      where: {
        id: id,
      },
      data: {
        nome,
        email,
        cpf,
        data_nascimento: data,
        matricula_id,
      },
    });

    return update;
  }

  @Delete(':id')
  async deleteDiscente(@Param('id') id: string) {
    const del = await this.prisma.discente.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
