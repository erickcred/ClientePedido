import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/Models/Produto';
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
    valorUni: [0]
  })

  produto: Produto = new Produto()


  constructor(
    private formBuilder: NonNullableFormBuilder,
    private produtoService: ProdutoService
  ) {

  }

  ngOnInit(): void {
    // this.form.value.nome = 'asdf'
  }

  adicionarProduto() {
    if (this.form.valid) {
      console.log(this.form.valid)
    } else {
      console.log(this.form.valid)
    }
    console.log(this.form.value)

    this.produtoService.salvar(this.form.value).subscribe({
      next: (response: any) => {
        console.log(response)
      },
      error: (error: any) => { console.log(error) }
    })
  }
}
