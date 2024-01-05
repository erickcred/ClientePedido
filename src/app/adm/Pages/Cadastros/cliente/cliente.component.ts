import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente, TipoDocumento } from 'src/app/Models/Cliente';
import { Telefone } from 'src/app/Models/Telefone';
import { ClienteService } from 'src/app/Services/cliente/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  mostrarFormCliente: boolean = true
  mostrarFormTelefone: boolean = false

  tiposDocumento!: TipoDocumento
  formCliente = this.formBuilder.group({
    id: [0],
    razaoSocial: ['', [Validators.required, Validators.min(3)] ],
    documento: ['', [Validators.required, Validators.min(3)] ],
    tipoDocumento: [0, [Validators.required] ],
    nomeContato: ['', [Validators.required, Validators.min(3)] ]
  })
  cliente!: Cliente


  formTelefone = this.formBuilder.group({
    numero: ['', [Validators.required, Validators.min(3)]],
    descricao: ['', [Validators.required, Validators.min(3)]],
    usuarioId: [0]
  })
  telefones: any[] = []

  fromEndereco = this.formBuilder.group({
    numero: ['']
  })

  constructor(
    private clienteService: ClienteService,
    private formBuilder: NonNullableFormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

  }

  adicionarCliente() {
    let clienteValido = this.validaFormulario(this.formCliente)
    if (!clienteValido) {
      console.log(this.formCliente.valid)
      alert('cliente invalido: ' + this.formCliente.valid)
      return
    }

    this.formCliente.value.tipoDocumento = this.formCliente.value.tipoDocumento == 0? TipoDocumento.CPF : TipoDocumento.CNPJ

    console.log(this.formCliente.valid)
    this.mostrarFormCliente = false
    this.mostrarFormTelefone = true

    this.clienteService.salvar(this.formCliente.value).subscribe({
      next: (response) => {
        console.log(response)
        if (response !== null) {
          this.cliente = response
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  adicionarTelefone() {
    if (this.validaFormulario(this.formTelefone)) {
      this.formTelefone.value.usuarioId = this.cliente.id
      this.telefones.push(this.formTelefone.value)

      this.limparFormulario(this.formTelefone)

      this.salvarTelefone()
    }

  }

  salvarTelefone() {
    if (this.telefones.length > 0) {
      this.clienteService.salvarTelefone(this.telefones).subscribe({
        next: (response) => {
          console.log(response)
        },
        error: (error) => {
          console.log(error)
        }
      })
    }
  }

  cadastrarTelefone() {
    this.mostrarFormTelefone = false
    this.mostrarFormCliente = true

    this.limparFormulario(this.formCliente)
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
