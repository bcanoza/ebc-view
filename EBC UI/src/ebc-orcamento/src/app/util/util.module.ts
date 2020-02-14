import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { FormErroViewComponent } from './form-erro-view/form-erro-view.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    FormErroViewComponent,
    AlertModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormDebugComponent,
    FormErroViewComponent,
    AlertModalComponent
  ],
  entryComponents: [AlertModalComponent]

})
export class UtilModule { }
