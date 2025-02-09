/* eslint-disable prettier/prettier */
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateTarefasDto {
    @IsNotEmpty()
    @IsString()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    descricao: string;

    @IsString()
    @IsNotEmpty()
    responsavel: string;

    @IsEnum(['CONCLUÍDO', 'FINALIZADO'], {
        message: 'status inválido',
    })
    status: 'CONCLUÍDO' | 'FINALIZADO';

    @IsEnum(['ALTA', 'MÉDIA', 'BAIXA'], {
        message: 'prioridade inválida',
    })
    prioridade: 'ALTA' | 'MÉDIA' | 'BAIXA';
}
