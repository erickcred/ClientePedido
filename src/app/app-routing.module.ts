import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'adm' },
  {
    path: 'adm',
    loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
