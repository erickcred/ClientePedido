import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Cliente } from 'src/app/Models/Cliente';
import { Telefone } from 'src/app/Models/Telefone';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly urlApi = 'https://localhost:7143'

  constructor(
    private http: HttpClient
  ) { }


  listarTodos() {
    return this.http.get<Cliente[]>(`${this.urlApi}/Cliente`).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  listar() {
    return this.http.get<Cliente>(`${this.urlApi}/Cliente`).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  salvar(cliente: Partial<Cliente>) {
    return this.http.post<Cliente>(`${this.urlApi}/Cliente`, cliente).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  atualizar(cliente: Cliente) {
    return this.http.put<Cliente>(`${this.urlApi}/Cliente`, cliente).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }

  salvarTelefone(telefone: Partial<Telefone[]>) {
    return this.http.post<Telefone[]>(`${this.urlApi}/Telefone`, telefone).pipe(
      first(),
      // tap(x => console.log(x))
    )
  }
}
