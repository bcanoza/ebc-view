import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'form-erro-view',
  templateUrl: './form-erro-view.component.html',
  styleUrls: ['./form-erro-view.component.css']
})
export class FormErroViewComponent implements OnInit {

  @Input() mostrarErro: boolean;

  @Input() msgErro: string;
  
  constructor() { }

  ngOnInit(): void {
    
  }

 



}
