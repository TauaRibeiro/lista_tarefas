/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTarefasDto } from './DTO/create.tarefa.dto';
import { TarefasService } from './tarefas.service';
import { UpdateTarefaDto } from './DTO/update.tarefa.dto';

@Controller('tarefas')
export class TarefasController {
  constructor(private tarefasService: TarefasService) {}
  @Get()
  async acheTodos(@Query('prioridade') prioridade?: 'ALTA' | 'MÉDIA' | 'BAIXA') {
    return await this.tarefasService.acheTodos(prioridade);
  }

  @Get(':id')
  async achePorId(@Param('id', ParseIntPipe) id: number) {
    return await this.tarefasService.achePorId(id);
  }
  
  @Post()
  async create(@Body() novaTarefa: CreateTarefasDto) {
    return await this.tarefasService.create(novaTarefa);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTarefaDto: UpdateTarefaDto,
  ) {
    return await this.tarefasService.update(id, updateTarefaDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number){
    await this.tarefasService.delete(id);
  }
}
