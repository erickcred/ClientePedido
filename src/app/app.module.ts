import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdmModule } from './adm/adm.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppmaterialModule } from './Shared/appmaterial/appmaterial.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    AdmModule,

    AppmaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
