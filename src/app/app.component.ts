import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Routes } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, CabecalhoComponent, CriarTarefaComponent, ListarTarefasComponent, RodapeComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-site';
}
