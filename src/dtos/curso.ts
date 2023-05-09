import { IsNotEmpty } from 'class-validator';

export class TypeCurso {
  @IsNotEmpty({ message: 'O campo Nome é obrigatório' })
  nome: string;
  @IsNotEmpty({ message: 'O campo Grade é obrigatório' })
  grade: number;
  @IsNotEmpty({ message: 'O campo Duração é obrigatório' })
  duracao: string;
  @IsNotEmpty({ message: 'O campo ID do Campus é obrigatório' })
  campus_id: string;
}
