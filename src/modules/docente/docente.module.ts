import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService, PrismaService],
})
export class DocenteModule {}
