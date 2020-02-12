import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UnidadeService } from './unidade.service';
import { UnidadeFormComponent } from './unidade-form/unidade-form.component';
import { UnidadeListComponent } from './unidade-list/unidade-list.component';
import { UtilModule } from '../util/util.module';



@NgModule({
  declarations: [
    UnidadeFormComponent,
    UnidadeListComponent    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
