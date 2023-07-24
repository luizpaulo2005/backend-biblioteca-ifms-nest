import { Injectable } from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { UpdateMatriculaDto } from './dto/update-matricula.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class MatriculaService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateMatriculaDto) {
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

  async findAll() {
    const select = await this.prisma.matricula.findMany();

    return select;
  }

  async findAllJoin() {
    const select = await this.prisma.matricula.findMany({
      include: {
        discente: {
          select: {
            discente: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
        curso: true,
      },
    });

    return select;
  }

  async findOne(id: CreateMatriculaDto['id']) {
    const select = await this.prisma.matricula.findUnique({
      where: {
        id: id,
      },
      include: {
        discente: {
          select: {
            discente: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
        curso: true,
      },
    });

    return select;
  }

  async update(id: CreateMatriculaDto['id'], body: UpdateMatriculaDto) {
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

  async remove(id: CreateMatriculaDto['id']) {
    const del = await this.prisma.matricula.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
