import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { FormsModule } from '@angular/forms';
import { FormretoComponent } from './formreto/formreto.component';
import { AsincronaComponent } from './asincrona/asincrona.component';
import { SolperuPipe } from '../solperu.pipe';



@NgModule({
  declarations: [
    ReactiveformsComponent,
    FormretoComponent,
    AsincronaComponent,
    SolperuPipe
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports: [
    ReactiveformsComponent,
    FormretoComponent,
    AsincronaComponent
  ]
})
export class PrincipalModule { }
