import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscenteDto } from './create-discente.dto';

export class UpdateDiscenteDto extends PartialType(CreateDiscenteDto) {}
