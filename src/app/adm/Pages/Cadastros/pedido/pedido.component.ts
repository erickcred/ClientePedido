import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/Models/Cliente';
import { Pedido } from 'src/app/Models/Pedido';
import { Produto } from 'src/app/Models/Produto';
import { ClienteService } from 'src/app/Services/cliente/cliente.service';
import { PedidoService } from 'src/app/Services/pedido/pedido.service';
import { ProdutoService } from 'src/app/Services/produto/produto.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  mostrarFormPedido: boolean = true
  mostrarFormProduto: boolean = false

  formPedido = this.formBuilder.group({
    numeroPedido: ['', [Validators.required]],
    dataEmissao: [Date(), [Validators.required]],
    dataChegada: [Date(), [Validators.required]],
    previsaoEntrega: [Date(), [Validators.required]],
    clienteId: [0, [Validators.required]],
    finalizado: [false],
  })

  formProduto = this.formBuilder.group({
    nome: ['', [Validators.required]],
    quantidade: [0, [Validators.required]],
    cor: [''],
    descricao: [''],
    valorUni: [0, [Validators.required]],
    ativo: [true],
    pedidoId: [0]
  })

  pedido: Pedido = new Pedido()
  clientes: Cliente[] = []
  produtos: any[] = []

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) {

  }

  ngOnInit(): void {
    this.listarClientes()
  }

  listarClientes() {
    this.clienteService.listarTodos().subscribe({
      next: (response) => {
        this.clientes = response
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  criarPedido() {
    let pedido = new Pedido()
    pedido.numeroPedido = this.formPedido.value.numeroPedido
    pedido.dataChegada = this.formataData(this.formPedido.value.dataChegada)
    pedido.dataEmissao = this.formataData(this.formPedido.value.dataEmissao)
    pedido.previsaoEntrega = this.formataData(this.formPedido.value.previsaoEntrega)
    pedido.clienteId = this.formPedido.value.clienteId
    if (this.validaFormulario(this.formPedido)) {

      this.pedidoService.salvar(pedido).subscribe({
        next: (response) => {
          console.log(response)
          this.pedido = response
          this.mostrarFormPedido = false
          this.mostrarFormProduto = true
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  }

  finalizarCadastro() {
    this.mostrarFormPedido = true
    this.mostrarFormProduto = false
  }

  formataData(data: any) {
    console.log('Data Emissão: ')
    console.log(data)

    let convert = new Date(data)
    console.log(convert)
    return (convert.getMonth() + 1) +'-'+ convert.getDate() +'-'+ convert.getFullYear()
  }

  adicionarProduto() {
    if (this.validaFormulario(this.formProduto)) {
      this.formProduto.value.pedidoId = this.pedido.id
      this.produtos.push(this.formProduto.value)

      this.limparFormulario(this.formProduto)
    }
  }

  salvarProdutos() {
    this.produtoService.salvarLista(this.produtos).subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  cadastrarProdutos() {
    this.mostrarFormProduto = false
    this.mostrarFormPedido = true
    this.salvarProdutos()

    this.limparFormulario(this.formPedido)
    this.produtos = []
  }

  validaFormulario(formulario: FormGroup) {
    return formulario.valid
  }

  limparFormulario(formulario: FormGroup) {
    formulario.clearValidators()
    formulario.reset()
    formulario.removeValidators
  }
}
