import { PartialType } from '@nestjs/mapped-types';
import { CreatePesquisaDto } from './create-pesquisa.dto';

export class UpdatePesquisaDto extends PartialType(CreatePesquisaDto) {}
