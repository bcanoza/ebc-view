import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnidadeListComponent } from './unidade/unidade-list/unidade-list.component';
import { UnidadeFormComponent } from './unidade/unidade-form/unidade-form.component';
import { FormDebugComponent } from './util/form-debug/form-debug.component';
import { MemoriaCalculoComponent } from './memoria-calculo/memoria-calculo.component';
import { AditivoComponent } from './aditivo/aditivo.component';
import { EapComponent } from './eap/eap.component';
import { CpuComponent } from './cpu/cpu.component';
import { InsumoComponent } from './insumo/insumo.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { 
    path:"mc", 
    component:MemoriaCalculoComponent
  },
  { 
    path:"aditivo", 
    component:AditivoComponent
  },
  { 
    path:"eap", 
    component:EapComponent
  },
  { 
    path:"cpu", 
    component:CpuComponent
  },
  { 
    path:"insumos", 
    component:InsumoComponent
  },
  { 
    path:"unidades", 
    component:UnidadeListComponent
  },
  { 
    path:"unidade", 
    component:UnidadeFormComponent
  },
  { 
    path:"", 
    component:HomeComponent
  },
  { 
    path:"**", 
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
