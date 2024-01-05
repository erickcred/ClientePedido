import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { ClienteComponent } from './Pages/Cadastros/cliente/cliente.component';
import { ProdutoComponent } from './Pages/Cadastros/produto/produto.component';

const routes: Routes = [
  { path: '', component: AdmComponent,
    children: [
    { path: 'cadastro-produto', component: ProdutoComponent },
    { path: 'cadastro-cliente', component: ClienteComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
