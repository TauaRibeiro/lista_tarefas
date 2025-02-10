/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tarefas' })
export class Tarefa {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  responsavel: string;

  @Column()
  status: 'CONCLUÍDO' | 'PENDENTE';

  @Column()
  prioridade: 'ALTA' | 'MÉDIA' | 'BAIXA';

  @Column()
  criadoEm: Date;

  @Column()
  atualizadoEm: Date;
}
