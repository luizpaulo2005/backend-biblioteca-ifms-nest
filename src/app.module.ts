import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CampusController } from './controllers/campus.controller';
import { CursoController } from './controllers/curso.controller';
import { DocenteController } from './controllers/docente.controller';
import { DiscenteController } from './controllers/discente.controller';
import { MatriculaController } from './controllers/matricula.controller';
import { PesquisaController } from './controllers/pesquisa.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    CampusController,
    CursoController,
    DocenteController,
    DiscenteController,
    MatriculaController,
    PesquisaController,
  ],
  providers: [PrismaService],
})
export class AppModule {}
