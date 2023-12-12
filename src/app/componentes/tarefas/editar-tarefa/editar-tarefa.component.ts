import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { FormsModule, NgModel } from '@angular/forms';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-tarefa.component.html',
  styleUrl: './editar-tarefa.component.css',
})
export class EditarTarefaComponent implements OnInit {
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

  editarTarefa() {
    this.service.editar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefas'])
    })
  }
  cancelarTarefa(){
    this.router.navigate(['/listarTarefas'])
  }
}
