import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PrismaService } from 'src/database/prisma.service';
import { TypePesquisa } from 'src/dtos/pesquisa';

@Controller('pesquisa')
export class PesquisaController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getPesquisa() {
    const select = await this.prisma.pesquisa.findMany();

    return select;
  }

  @Get('all')
  async getPesquisaAll() {
    const select = await this.prisma.pesquisa.findMany({
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

  @Get(':id')
  async getPesquisaById(@Param('id') id: string) {
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

  @Get('download/:id')
  async getPesquisaDownload(@Param('id') id: string, @Res() res) {
    const select = await this.prisma.pesquisa.findUnique({
      where: {
        id: id,
      },
    });

    return res.download(select.url_download, { root: 'uploads' });
  }

  @Post()
  @UseInterceptors(FileInterceptor('pdfFile'))
  async createPesquisa(
    @Body() body: TypePesquisa,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'pdf' })
        .build(),
    )
    file: Express.Multer.File,
  ) {
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

  @Put(':id')
  async updatePesquisa(@Param('id') id: string, @Body() body: TypePesquisa) {
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

  @Delete(':id')
  async deletePesquisa(@Param('id') id: string) {
    const del = await this.prisma.pesquisa.delete({
      where: {
        id: id,
      },
    });

    return del;
  }
}
