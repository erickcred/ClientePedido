import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/Models/Cliente';
import { ClienteService } from 'src/app/Services/cliente/cliente.service';
import { PedidoService } from 'src/app/Services/pedido/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  mostrarFormPedido: boolean = true
  mostrarFormProduto: boolean = false

  formPedido = this.formBuilder.group({
    numeroPrdido: ['', [Validators.required]],
    dataEmissao: [Date(), [Validators.required]],
    dataChegada: [Date(), [Validators.required]],
    previsaoEntrega: [Date(), [Validators.required]],
    clienteId: [0, [Validators.required]],
    finalizado: [false],
  })

  formProduto = this.formBuilder.group({
    // id: [null],
    nome: ['', [Validators.required]],
    quantidade: [0, [Validators.required]],
    cor: [''],
    descricao: [''],
    valorUni: [0, [Validators.required]],
  })

  clientes: Cliente[] = []

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private pedidoService: PedidoService,
    private clienteService: ClienteService
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
    console.log(this.validaFormulario(this.formPedido))
    console.log(this.formPedido.value)
    let data = this.formPedido.value.dataEmissao

    new Date()



    if (this.validaFormulario(this.formPedido)) {

      // this.pedidoService.salvar(this.formPedido.value).subscribe({
      //   next: (response) => {
      //     console.log(response)
      //     this.mostrarFormPedido = false
      //     this.mostrarFormProduto = true
      //   },
      //   error: (error) => {
      //     console.log(error)
      //   }
      // })
// 2024-01-07T14:57:16.677Z

    }
  }

  adicionarProduto() {

    this.limparFormulario(this.formProduto)
  }

  finalizarCadastro() {
    this.mostrarFormPedido = true
    this.mostrarFormProduto = false
  }

  validaFormulario(formulario: FormGroup) {
    return formulario.valid
  }

  limparFormulario(formulario: FormGroup) {
    formulario.clearValidators()
    formulario.reset()
    formulario.removeValidators
  }

  formataData() {
    // let data = new Date(this.formPedido.value.dataEmissao)

  }
}
