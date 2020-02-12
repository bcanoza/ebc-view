import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormErroViewComponent } from './form-erro-view/form-erro-view.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    FormErroViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    FormErroViewComponent
  ]
})
export class UtilModule { }
