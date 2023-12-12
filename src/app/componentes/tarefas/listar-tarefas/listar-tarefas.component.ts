import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TarefaComponent } from '../tarefa/tarefa.component';
import { CommonModule } from '@angular/common';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-listar-tarefas',
  standalone: true,
  imports: [ CommonModule, RouterModule, TarefaComponent, HttpClientModule],
  templateUrl: './listar-tarefas.component.html',
  styleUrl: './listar-tarefas.component.css'
})
export class ListarTarefasComponent implements OnInit {
  listaTarefas: Tarefa[] = [];

  constructor(private service: TarefaService){}

  ngOnInit(): void {
    /*Passando o método Subscrib, para que o observable entenda que é para retornar a lista de tarefas, com as tarefas existentes. */
    this.service.listar().subscribe((listaTarefas) => {
      this.listaTarefas = listaTarefas;
    });
  }
}
