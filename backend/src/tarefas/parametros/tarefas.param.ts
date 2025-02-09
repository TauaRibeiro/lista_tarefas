/* eslint-disable prettier/prettier */
export type CreateTarefasParam = {
  titulo: string;
  descricao: string;
  responsavel: string;
  status: 'CONCLUÍDO' | 'FINALIZADO';
  prioridade: 'ALTA' | 'MÉDIA' | 'BAIXA';
};

export type UpdateTarefasParam = {
  titulo?: string;
  descricao?: string;
  responsavel?: string;
  status?: 'CONCLUÍDO' | 'FINALIZADO';
  prioridade?: 'ALTA' | 'MÉDIA' | 'BAIXA';
};
