import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmComponent } from './adm.component';
import { ClienteComponent } from './Pages/Cadastros/cliente/cliente.component';
import { ProdutoComponent } from './Pages/Cadastros/produto/produto.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '', component: AdmComponent,
    children: [
      { path: 'home', component: HomeComponent },
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
