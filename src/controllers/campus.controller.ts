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
import { TypeCampus } from 'src/dtos/campus';

@Controller('campus')
export class CampusController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getCampus() {
    const select = await this.prisma.campus.findMany();

    return select;
  }

  @Get('all')
  async getCampusAll() {
    const select = await this.prisma.campus.findMany({
      include: {
        cursos: true,
      },
    });

    return select;
  }

  @Get(':id')
  async getCampusById(@Param('id') id: string) {
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

  @Post()
  async createCampus(@Body() body: TypeCampus) {
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

  @Put(':id')
  async updateCampus(@Param('id') id: string, @Body() body: TypeCampus) {
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

  @Delete(':id')
  async deleteCampus(@Param('id') id: string) {
    const del = await this.prisma.campus.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
