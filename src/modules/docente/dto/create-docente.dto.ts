import { IsNotEmpty } from 'class-validator';

export class CreateDocenteDto {
  id: string;
  @IsNotEmpty({ message: 'O campo Nome é obrigatório' })
  nome: string;
  @IsNotEmpty({ message: 'O campo SIAPE é obrigatório' })
  siape: string;
  @IsNotEmpty({ message: 'O campo Email é obrigatório' })
  email: string;
  @IsNotEmpty({ message: 'O campo Data de Nascimento é obrigatório' })
  data_nascimento: string;
  @IsNotEmpty({ message: 'O campo CPF é obrigatório' })
  cpf: string;
  @IsNotEmpty({ message: 'O campo Formação é obrigatório' })
  formacao: string;
}
