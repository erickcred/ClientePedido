import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatNativeDateModule } from '@angular/material/core'
import { MatChipsModule } from '@angular/material/chips'

import { AdmRoutingModule } from './adm-routing.module';
import { AdmComponent } from './adm.component';
import { ProdutoComponent } from './Cadastros/produto/produto.component';
import { ClienteComponent } from './Cadastros/cliente/cliente.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdmComponent,
    ProdutoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdmRoutingModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatChipsModule,


  ]
})
export class AdmModule { }
