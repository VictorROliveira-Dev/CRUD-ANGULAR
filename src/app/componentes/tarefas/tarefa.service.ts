import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly API = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API);
  }

  criar(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.API, tarefa);
  }

  editar(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.API}/${tarefa.id}`;
    return this.http.put<Tarefa>(url, tarefa);
  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  excluir(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Tarefa>(url);
  }
}
