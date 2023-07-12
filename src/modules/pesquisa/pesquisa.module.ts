import { Module } from '@nestjs/common';
import { PesquisaService } from './pesquisa.service';
import { PesquisaController } from './pesquisa.controller';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [PesquisaController],
  providers: [PesquisaService, PrismaService],
})
export class PesquisaModule {}
