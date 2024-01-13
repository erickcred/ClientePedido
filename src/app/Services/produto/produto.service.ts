import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Produto } from 'src/app/Models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly urlApi = 'https://localhost:7143'

  constructor(
    private http: HttpClient
  ) { }

  listarTodos() {
    return this.http.get<Produto[]>(`${this.urlApi}/Produto`).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  listar() {
    return this.http.get<Produto>(`${this.urlApi}/Produto`).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  salvar(produto: Partial<Produto>) {
    return this.http.post<Produto>(`${this.urlApi}/Produto`, produto).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  salvarLista(produtos: Partial<Produto[]>) {
    return this.http.post<Produto[]>(`${this.urlApi}/Produto/criarLista`, produtos).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  atualizar(produto: Produto) {
    return this.http.put<Produto>(`${this.urlApi}/Produto`, produto).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }
}
