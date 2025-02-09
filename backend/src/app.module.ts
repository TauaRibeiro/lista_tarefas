/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TarefasModule } from './tarefas/tarefas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarefa } from './entidades/tarefa.entity';

@Module({
  imports: [TarefasModule, 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3307,
    username: "root",
    password: "",
    database: "tarefas_db",
    entities: [Tarefa],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
