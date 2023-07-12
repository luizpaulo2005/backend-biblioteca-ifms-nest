import { Injectable } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DocenteService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateDocenteDto) {
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

  async findAll() {
    const select = await this.prisma.docente.findMany();

    return select;
  }

  async findAllJoin() {
    const select = await this.prisma.docente.findMany({
      include: {
        pesquisas: true,
      },
    });

    return select;
  }

  async findOne(id: CreateDocenteDto['id']) {
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

  async update(id: CreateDocenteDto['id'], body: UpdateDocenteDto) {
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

  async remove(id: CreateDocenteDto['id']) {
    const del = await this.prisma.docente.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
