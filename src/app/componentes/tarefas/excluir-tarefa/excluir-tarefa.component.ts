import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from '../tarefa';

@Component({
  selector: 'app-excluir-tarefa',
  standalone: true,
  imports: [],
  templateUrl: './excluir-tarefa.component.html',
  styleUrl: './excluir-tarefa.component.css',
})
export class ExcluirTarefaComponent implements OnInit {
  tarefa: Tarefa = {
    id: 0,
    conteudo: '',
    descricao: '',
    modelo: '',
  };

  constructor(
    private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.service.buscarPorId(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa;
    })
  }

  excluirTarefa() {
    if (this.tarefa.id) {
      this.service.excluir(this.tarefa.id).subscribe(() => {
        this.router.navigate(['/listarTarefas']);
      })
    }
  }

  cancelarTarefa() {
    this.router.navigate(['/listarTarefas']);
  }
}
