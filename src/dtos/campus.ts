import { IsNotEmpty } from 'class-validator';

export class TypeCampus {
  @IsNotEmpty({ message: 'O campo Nome é obrigatório' })
  nome: string;
  @IsNotEmpty({ message: 'O campo Cidade é obrigatória' })
  cidade: string;
  @IsNotEmpty({ message: 'O campo Estado é obrigatório' })
  estado: string;
  @IsNotEmpty({ message: 'O campo Email é obrigatório' })
  email: string;
}
