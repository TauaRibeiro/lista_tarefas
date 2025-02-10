/* eslint-disable prettier/prettier */
export type CreateTarefasParam = {
  titulo: string;
  descricao: string;
  responsavel: string;
  status: 'CONCLUÍDO' | 'PENDENTE';
  prioridade: 'ALTA' | 'MÉDIA' | 'BAIXA';
};

export type UpdateTarefasParam = {
  titulo?: string;
  descricao?: string;
  responsavel?: string;
  status?: 'CONCLUÍDO' | 'PENDENTE';
  prioridade?: 'ALTA' | 'MÉDIA' | 'BAIXA';
};
