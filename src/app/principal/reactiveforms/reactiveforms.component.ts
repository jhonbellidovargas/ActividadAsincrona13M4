import { Component } from '@angular/core';
import { Registro } from 'src/app/modelo/registro';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {
  model: Registro = {username: "", password:""};
}
