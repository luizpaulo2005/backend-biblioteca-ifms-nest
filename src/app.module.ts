import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 } from 'uuid';

import { CampusModule } from './modules/campus/campus.module';
import { CursoModule } from './modules/curso/curso.module';
import { DiscenteModule } from './modules/discente/discente.module';
import { DocenteModule } from './modules/docente/docente.module';
import { MatriculaModule } from './modules/matricula/matricula.module';
import { PesquisaModule } from './modules/pesquisa/pesquisa.module';

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
    CampusModule,
    CursoModule,
    DiscenteModule,
    DocenteModule,
    MatriculaModule,
    PesquisaModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
