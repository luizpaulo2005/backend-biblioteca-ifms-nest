import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  Res,
} from '@nestjs/common';
import { PesquisaService } from './pesquisa.service';
import { CreatePesquisaDto } from './dto/create-pesquisa.dto';
import { UpdatePesquisaDto } from './dto/update-pesquisa.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pesquisa')
export class PesquisaController {
  constructor(private readonly pesquisaService: PesquisaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('pdfFile'))
  create(
    @Body() body: CreatePesquisaDto,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: 'pdf' })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    return this.pesquisaService.create(body, file);
  }

  @Get()
  findAll() {
    return this.pesquisaService.findAll();
  }

  @Get('all')
  findAllJoin() {
    return this.pesquisaService.findAllJoin();
  }

  @Get('sumario')
  findAllSumario() {
    return this.pesquisaService.findAllSumario();
  }

  @Get('download/:id')
  downloadPDF(@Param('id') id: CreatePesquisaDto['id'], @Res() res) {
    return this.pesquisaService.downloadPDF(id, res);
  }

  @Get(':id')
  findOne(@Param('id') id: CreatePesquisaDto['id']) {
    return this.pesquisaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: UpdatePesquisaDto['id'],
    @Body() body: UpdatePesquisaDto,
  ) {
    return this.pesquisaService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: CreatePesquisaDto['id']) {
    return this.pesquisaService.remove(id);
  }
}
