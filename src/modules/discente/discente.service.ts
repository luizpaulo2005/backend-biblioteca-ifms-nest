import { Injectable } from '@nestjs/common';
import { CreateDiscenteDto } from './dto/create-discente.dto';
import { UpdateDiscenteDto } from './dto/update-discente.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class DiscenteService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateDiscenteDto) {
    const { nome, matricula_id, data_nascimento, cpf, email } = body;

    const data = new Date(data_nascimento);

    const create = await this.prisma.discente.create({
      data: {
        nome,
        email,
        cpf,
        data_nascimento: data,
        matriculas: {
          create: {
            matricula_id,
          },
        },
      },
    });

    return create;
  }

  async findAll() {
    const select = await this.prisma.discente.findMany();

    return select;
  }

  async findAllJoin() {
    const select = await this.prisma.discente.findMany({
      include: {
        matriculas: true,
        pesquisas: true,
      },
    });

    return select;
  }

  async findOne(id: CreateDiscenteDto['id']) {
    const select = await this.prisma.discente.findUnique({
      where: {
        id: id,
      },
      include: {
        matriculas: true,
        pesquisas: true,
      },
    });

    return select;
  }

  async update(id: CreateDiscenteDto['id'], body: UpdateDiscenteDto) {
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
      },
    });

    return update;
  }

  async remove(id: CreateDiscenteDto['id']) {
    const del = await this.prisma.discente.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
