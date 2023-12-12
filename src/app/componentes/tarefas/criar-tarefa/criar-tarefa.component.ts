import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-criar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './criar-tarefa.component.html',
  styleUrl: './criar-tarefa.component.css',
})
export class CriarTarefaComponent implements OnInit {
  tarefa: Tarefa = {
    conteudo: '',
    descricao: '',
    modelo: '',
  };

  constructor(private service: TarefaService, private router: Router) {}

  ngOnInit(): void {}

  criarTarefa() {
    this.service.criar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefas']);
    });
  }

  cancelarTarefa() {
    this.router.navigate(['/listarTarefas']);
  }
}
