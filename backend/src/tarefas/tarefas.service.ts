/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarefa } from 'src/entidades/tarefa.entity';
import { Repository } from 'typeorm';
import { CreateTarefasParam, UpdateTarefasParam } from './parametros/tarefas.param';

@Injectable()
export class TarefasService {
  constructor(
    @InjectRepository(Tarefa) private repositorioTarefa: Repository<Tarefa>,
  ) {}
  
  acheTodos(prioridade?: 'ALTA' | 'MÉDIA' | 'BAIXA') {
    if(prioridade) {
        return this.repositorioTarefa.findBy({ prioridade });
    }

    return this.repositorioTarefa.find();
  }

  achePorId(id: number) {
    return this.repositorioTarefa.findOneBy({ id });
  }

  create(tarefa: CreateTarefasParam) {
    const novaTarefa = this.repositorioTarefa.create({
      ...tarefa,
      criadoEm: new Date(),
      atualizadoEm: new Date(),
    });

    return this.repositorioTarefa.save(novaTarefa);
  }

  update(id: number, updateTarefa: UpdateTarefasParam){
    this.repositorioTarefa.update({ id }, {...updateTarefa, atualizadoEm: new Date()});

    return this.achePorId(id);
  }

  delete(id: number){
    const antigaTarefa = this.achePorId(id);

    this.repositorioTarefa.delete({ id });

    return antigaTarefa;
  }
}
