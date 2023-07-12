import { Injectable } from '@nestjs/common';
import { CreateCampusDto } from './dto/create-campus.dto';
import { UpdateCampusDto } from './dto/update-campus.dto';
import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class CampusService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateCampusDto) {
    const { nome, cidade, estado, email } = body;

    const create = await this.prisma.campus.create({
      data: {
        nome,
        cidade,
        estado,
        email,
      },
    });
    return create;
  }

  async findAll() {
    const select = await this.prisma.campus.findMany();

    return select;
  }

  async findOne(id: CreateCampusDto['id']) {
    const select = await this.prisma.campus.findUnique({
      where: {
        id: id,
      },
      include: {
        cursos: true,
      },
    });

    return select;
  }

  async update(id: UpdateCampusDto['id'], body: UpdateCampusDto) {
    const { nome, cidade, estado, email } = body;
    const update = await this.prisma.campus.update({
      where: {
        id: id,
      },
      data: {
        nome,
        cidade,
        estado,
        email,
      },
    });

    return update;
  }

  async remove(id: CreateCampusDto['id']) {
    const del = await this.prisma.campus.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
