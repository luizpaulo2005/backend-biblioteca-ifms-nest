import { Module } from '@nestjs/common';
import { DiscenteService } from './discente.service';
import { DiscenteController } from './discente.controller';
import { PrismaService } from '../../database/prisma.service';

@Module({
  controllers: [DiscenteController],
  providers: [DiscenteService, PrismaService],
})
export class DiscenteModule {}
