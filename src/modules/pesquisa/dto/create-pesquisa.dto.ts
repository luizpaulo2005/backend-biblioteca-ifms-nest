import { IsNotEmpty } from 'class-validator';

export class CreatePesquisaDto {
  id: string;
  @IsNotEmpty({ message: 'O campo Título é obrigatório' })
  titulo: string;
  @IsNotEmpty({ message: 'O campo Data de Apresentação é obrigatório' })
  data_apresentacao: string;
  @IsNotEmpty({ message: 'O campo Resumo é obrigatório' })
  resumo: string;
  @IsNotEmpty({ message: 'O campo Palavras-chave é obrigatório' })
  palavras_chave: string;
  @IsNotEmpty({ message: 'O campo Curso é obrigatório' })
  curso_id: string;
  @IsNotEmpty({ message: 'O campo Discente é obrigatório' })
  discente_id: string;
  @IsNotEmpty({ message: 'O campo Docente é obrigatório' })
  docente_id: string;
}
