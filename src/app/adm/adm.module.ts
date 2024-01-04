import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm.component';
import { ProdutoComponent } from './Pages/Cadastros/produto/produto.component';
import { ClienteComponent } from './Pages/Cadastros/cliente/cliente.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppmaterialModule } from '../Shared/appmaterial/appmaterial.module';


@NgModule({
  declarations: [
    AdmComponent,
    ProdutoComponent,
    ClienteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdmRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    AppmaterialModule,

  ]
})
export class AdmModule { }
