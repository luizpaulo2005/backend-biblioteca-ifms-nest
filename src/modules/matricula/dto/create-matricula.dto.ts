import { IsNotEmpty } from 'class-validator';

export class CreateMatriculaDto {
  @IsNotEmpty({ message: 'O campo Número da Matrícula é obrigatório' })
  id: string;
  @IsNotEmpty({ message: 'O campo Data de Início é obrigatório' })
  data_inicio: string;
  @IsNotEmpty({ message: 'O campo Curso é obrigatório' })
  curso_id: string;
}
