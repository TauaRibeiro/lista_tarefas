/* eslint-disable prettier/prettier */
import { CreateTarefasDto } from './create.tarefa.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTarefaDto extends PartialType(CreateTarefasDto){}
