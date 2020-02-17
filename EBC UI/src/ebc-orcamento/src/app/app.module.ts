import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ModalModule } from 'ngx-bootstrap/modal';

import { UnidadeModule } from './unidade/unidade.module';
import { StaticModule } from './static/static.module';
import { InsumoComponent } from './insumo/insumo.component';
import { CpuComponent } from './cpu/cpu.component';
import { EapComponent } from './eap/eap.component';
import { AditivoComponent } from './aditivo/aditivo.component';
import { MemoriaCalculoComponent } from './memoria-calculo/memoria-calculo.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    InsumoComponent,
    CpuComponent,
    EapComponent,
    AditivoComponent,
    MemoriaCalculoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    UnidadeModule,
    StaticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
