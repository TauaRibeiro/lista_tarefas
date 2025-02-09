/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from 'src/entidades/tarefa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tarefa])],
  controllers: [TarefasController],
  providers: [TarefasService],
})
export class TarefasModule {}
