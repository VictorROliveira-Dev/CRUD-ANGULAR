import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tarefa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent implements OnInit {
  @Input() tarefa: Tarefa = {
    id: 0,
    conteudo: 'Eu amo angular!',
    descricao: 'Alef aprendendo angular',
    modelo: 'modelo3'
  }

  constructor(){}

  ngOnInit(): void {

  }

  larguraTarefa(): string {
    if(this.tarefa.conteudo.length > 256){
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
