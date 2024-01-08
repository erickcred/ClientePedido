import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm.component';
import { ProdutoComponent } from './Pages/Cadastros/produto/produto.component';
import { ClienteComponent } from './Pages/Cadastros/cliente/cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppmaterialModule } from '../Shared/appmaterial/appmaterial.module';
import { HomeComponent } from './Pages/home/home.component';
import { PedidoComponent } from './Pages/Cadastros/pedido/pedido.component';


@NgModule({
  declarations: [
    AdmComponent,
    ProdutoComponent,
    ClienteComponent,
    HomeComponent,
    PedidoComponent,
  ],
  imports: [
    CommonModule,
    AdmRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    AppmaterialModule,

  ],
  providers: [],
  bootstrap: [AdmComponent]
})
export class AdmModule { }
