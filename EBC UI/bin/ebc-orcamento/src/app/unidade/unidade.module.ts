import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


import { UnidadeFormComponent } from './unidade-form/unidade-form.component';
import { UnidadeListComponent } from './unidade-list/unidade-list.component';
import { UtilModule } from '../util/util.module';
import { UnidadeService } from '../service/unidade.service';



@NgModule({
  declarations: [
    UnidadeFormComponent,
    UnidadeListComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    UtilModule

  ],
  exports: [
    UnidadeFormComponent,
    UnidadeListComponent
  ],
  providers: [
    UnidadeService
  ]
})
export class UnidadeModule { }
