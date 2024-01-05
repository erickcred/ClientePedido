import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Models/Produto';
import { ProdutoService } from 'src/app/Services/produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'cor', 'descricao', 'quantidade', 'valorUni'];
  produtos: Produto[] = []


  constructor(
    private produtoService: ProdutoService
  ) {

  }

  ngOnInit(): void {
    this.listarProdutos()
  }

  listarProdutos() {
    this.produtoService.listarTodos().subscribe({
      next: (response) => {
        this.produtos = response
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
  valorToralProdutos() {
    return this.produtos.map(t => t.valorUni * t.quantidade).reduce((acc, value) => acc + value, 0)
  }
}
