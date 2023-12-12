import { Routes, RouterModule } from '@angular/router';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { NgModule } from '@angular/core';
import { ExcluirTarefaComponent } from './componentes/tarefas/excluir-tarefa/excluir-tarefa.component';
import { EditarTarefaComponent } from './componentes/tarefas/editar-tarefa/editar-tarefa.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarTarefas',
    pathMatch: 'full'
  },
  {
    path: 'criarTarefa',
    component: CriarTarefaComponent
  },
  {
    path: 'listarTarefas',
    component: ListarTarefasComponent
  },
  {
    path: 'tarefas/excluir-tarefa/:id',
    component: ExcluirTarefaComponent
  },
  {
    path: 'tarefas/editar-tarefa/:id',
    component: EditarTarefaComponent
  }
];
