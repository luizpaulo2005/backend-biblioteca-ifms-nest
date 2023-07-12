import { IsNotEmpty } from 'class-validator';

export class CreateDiscenteDto {
  id: string;
  @IsNotEmpty({ message: 'O campo Nome é obrigatório' })
  nome: string;
  @IsNotEmpty({ message: 'O campo Matrícula é obrigatória' })
  matricula_id: string;
  @IsNotEmpty({ message: 'O campo Email é obrigatório' })
  email: string;
  @IsNotEmpty({ message: 'O campo Data de Nascimento é obrigatório' })
  data_nascimento: string;
  @IsNotEmpty({ message: 'O campo CPF é obrigatório' })
  cpf: string;
}
