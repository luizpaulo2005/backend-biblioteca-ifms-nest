import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { CampusController } from './controllers/campus.controller';
import { CursoController } from './controllers/curso.controller';
import { DocenteController } from './controllers/docente.controller';
import { DiscenteController } from './controllers/discente.controller';
import { MatriculaController } from './controllers/matricula.controller';
import { PesquisaController } from './controllers/pesquisa.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: diskStorage({
          destination: './uploads',
          filename(req, file, callback) {
            return callback(null, `${v4()}.pdf`);
          },
        }),
      }),
    }),
  ],
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
