import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateCursoDto) {
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

  async findAll() {
    const select = await this.prisma.curso.findMany();

    return select;
  }

  async findAllJoin() {
    const select = await this.prisma.curso.findMany({
      include: {
        campus: true,
        pesquisas: true,
      },
    });

    return select;
  }

  async findOne(id: CreateCursoDto['id']) {
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

  async update(id: CreateCursoDto['id'], body: UpdateCursoDto) {
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

  async remove(id: CreateCursoDto['id']) {
    const del = await this.prisma.curso.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
