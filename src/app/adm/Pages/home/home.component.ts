import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/Models/Cliente';
import { Produto } from 'src/app/Models/Produto';
import { ClienteService } from 'src/app/Services/cliente/cliente.service';
import { ProdutoService } from 'src/app/Services/produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('Produto') paginatorProduto!: MatPaginator
  @ViewChild('Cliente') paginatorCliente!: MatPaginator

  displayedColumns: string[] = ['nome', 'cor', 'descricao', 'quantidade', 'valorUni']
  produtos = new MatTableDataSource<Produto[]>()
  produtoListaValores: Produto[] = []

  displayedColumnsClientes: string[] = ['razaoSocial', 'documento', 'tipoDocumento', 'nomeContato']
  clientes = new MatTableDataSource<Cliente[]>()

  constructor(
    private produtoService: ProdutoService,
    private clienteService: ClienteService
  ) {

  }

  ngOnInit(): void {
    this.listarProdutos()
    this.listarClientes()
  }

  listarProdutos() {
    this.produtoService.listarTodos().subscribe({
      next: (response: any) => {
        this.produtos.data = response
        this.produtoListaValores = response
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  valorToralProdutos() {
    return this.produtoListaValores.map(t => t.valorUni * t.quantidade).reduce((acc, value) => acc + value, 0)
  }

  listarClientes() {
    this.clienteService.listarTodos().subscribe({
      next: (response: any) => {
        this.clientes.data = response
        console.log(this.clientes.data)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  ngAfterViewInit() {
    this.clientes.paginator = this.paginatorCliente
    this.produtos.paginator = this.paginatorProduto
  }

}


