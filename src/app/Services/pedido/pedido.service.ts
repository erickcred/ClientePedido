import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Pedido } from 'src/app/Models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly urlApi = 'https://localhost:7143/Pedido'

  constructor(
    private http: HttpClient
  ) { }

  listarTodos() {
    return this.http.get<Pedido[]>(`${this.urlApi}`).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  listar() {
    return this.http.get<Pedido>(`${this.urlApi}`).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  salvar(pedido: Partial<Pedido>) {
    return this.http.post<Pedido>(`${this.urlApi}`, pedido).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  atualizar(pedido: Pedido) {
    return this.http.put<Pedido>(`${this.urlApi}`, pedido).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  finalizar(pedido: Pedido) {
    return this.http.put<Pedido>(`${this.urlApi}/${pedido.id}`, pedido).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }
}
