import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadeFormComponent } from './unidade-form/unidade-form.component';
import { UnidadeService } from './unidade.service';
import { UnidadeListComponent } from './unidade-list/unidade-list.component';



@NgModule({
  declarations: [
    UnidadeFormComponent,
    UnidadeListComponent
  ],
  imports: [
    CommonModule,
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
