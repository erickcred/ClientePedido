import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/Models/Cliente';
import { Pedido } from 'src/app/Models/Pedido';
import { Produto } from 'src/app/Models/Produto';
import { ClienteService } from 'src/app/Services/cliente/cliente.service';
import { PedidoService } from 'src/app/Services/pedido/pedido.service';
import { ProdutoService } from 'src/app/Services/produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('Produto') paginatorProduto!: MatPaginator
  @ViewChild('Cliente') paginatorCliente!: MatPaginator

  displayedColumns: string[] = ['pedido', 'nome', 'cor', 'descricao', 'quantidade', 'valorUni']
  produtos = new MatTableDataSource<Produto[]>()
  produtoListaValores: Produto[] = []

  displayedColumnsClientes: string[] = ['razaoSocial', 'documento', 'tipoDocumento', 'nomeContato']
  clientes = new MatTableDataSource<Cliente[]>()

  displayedColumnsPedidos: string[] = ['numeroPedido', 'dataEmissao', 'dataChegada', 'previsaoEntrega', 'cliente']
  pedidos = new MatTableDataSource<Pedido[]>()

  constructor(
    private produtoService: ProdutoService,
    private clienteService: ClienteService,
    private pedidoService: PedidoService
  ) {

  }

  ngOnInit(): void {
    this.listarProdutos()
    this.listarClientes()
    this.listarPedidos()
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

  valorTotalProdutos() {
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

  listarPedidos() {
    this.pedidoService.listarTodos().subscribe({
      next: (response: any) => {
        this.pedidos = response
        console.log(response)
      },
      error: (error: any) => {
        console.log(error)
      }
    })
  }

  ngAfterViewInit() {
    this.clientes.paginator = this.paginatorCliente
    this.produtos.paginator = this.paginatorProduto
  }

}


