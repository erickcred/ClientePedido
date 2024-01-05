import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { ProdutoService } from 'src/app/Services/produto/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  form = this.formBuilder.group({
    // id: [null],
    nome: [''],
    quantidade: [0],
    cor: [''],
    descricao: [''],
    valorUni: [0],
  })

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private produtoService: ProdutoService
  ) {

  }

  ngOnInit(): void {

  }

  adicionarProduto() {
    let clienteValido = this.validaForm()
    if (!clienteValido) {
      alert('cliente invalido: ' + this.form.valid)
      return
    }

    this.produtoService.salvar(this.form.value).subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (error: any) => { console.log(error); }
    })
  }

  validaForm() {
    if (this.form.valid) {
      console.log(this.form.valid)
    } else {
      console.log(this.form.valid)
    }
    return this.form.valid
  }


}
