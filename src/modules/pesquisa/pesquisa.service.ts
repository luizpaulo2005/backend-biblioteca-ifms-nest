import { Injectable } from '@nestjs/common';
import { CreatePesquisaDto } from './dto/create-pesquisa.dto';
import { UpdatePesquisaDto } from './dto/update-pesquisa.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class PesquisaService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreatePesquisaDto, file: Express.Multer.File) {
    const {
      titulo,
      curso_id,
      data_apresentacao,
      palavras_chave,
      resumo,
      discente_id,
      docente_id,
    } = body;
    const data = new Date(data_apresentacao);
    const create = await this.prisma.pesquisa.create({
      data: {
        titulo,
        data_apresentacao: data,
        palavras_chave,
        resumo,
        curso_id,
        url_download: file.filename,
        discentes: {
          create: {
            discente_id,
          },
        },
        docentes: {
          create: {
            docente_id,
          },
        },
      },
    });

    return create;
  }

  async findAll() {
    const select = await this.prisma.pesquisa.findMany();

    return select;
  }

  async findAllJoin() {
    const select = await this.prisma.pesquisa.findMany({
      include: {
        discentes: {
          select: {
            discente: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
        docentes: {
          select: {
            docente: {
              select: {
                id: true,
                nome: true,
              },
            },
          },
        },
      },
    });

    return select;
  }

  async findAllSumario() {
    const select = await this.prisma.pesquisa.findMany({
      orderBy: {
        data_apresentacao: 'desc',
      },
      include: {
        discentes: {
          select: {
            discente: true,
          },
        },
        docentes: {
          select: {
            docente: true,
          },
        },
      },
      take: 10,
    });

    return select;
  }

  async findOne(id: CreatePesquisaDto['id']) {
    const select = await this.prisma.pesquisa.findUnique({
      where: {
        id: id,
      },
      include: {
        discentes: {
          select: {
            discente: true,
          },
        },
        docentes: {
          select: {
            docente: true,
          },
        },
      },
    });

    return select;
  }

  async update(id: UpdatePesquisaDto['id'], body: UpdatePesquisaDto) {
    const {
      titulo,
      curso_id,
      data_apresentacao,
      palavras_chave,
      resumo,
      discente_id,
      docente_id,
    } = body;

    const data = new Date(data_apresentacao);

    const update = await this.prisma.pesquisa.update({
      where: {
        id: id,
      },
      data: {
        titulo,
        data_apresentacao: data,
        palavras_chave,
        resumo,
        curso_id,
        discentes: {
          create: {
            discente_id,
          },
        },
        docentes: {
          create: {
            docente_id,
          },
        },
      },
    });

    return update;
  }

  async remove(id: CreatePesquisaDto['id']) {
    const del = await this.prisma.pesquisa.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
