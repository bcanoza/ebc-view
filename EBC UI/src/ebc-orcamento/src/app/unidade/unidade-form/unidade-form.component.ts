import { Component, OnInit, Input } from '@angular/core';

import { Unidade } from '../unidade';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'unidade-form',
  templateUrl: './unidade-form.component.html',
  styleUrls: ['./unidade-form.component.css']
})
export class UnidadeFormComponent implements OnInit {

  @Input()
  unidade: Unidade;
    
  codigo: string = "";

  constructor(private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.unidade = new Unidade();
  }

  salvarUnidade(): void {    
    this.unidadeService.save(this.unidade);
  }

  setPreferencial(codigo: string): void {
    this.unidade.codigo = codigo;   
  }


  editarCodigo(codigo: string): void {
    this.codigo = codigo;
  }

  adicionarCodigo(): void {

    if (this.unidade.codigo == "") {
      this.unidade.codigo = this.codigo;
    }

    this.unidade.codigos.push(this.codigo);
    this.codigo = "";
  }

  deletarCodigo(codigo: String): void {

    for (let i = 0; i < this.unidade.codigos.length; i++) {
      if (this.unidade.codigos[i] === codigo) {
        this.unidade.codigos.splice(i, 1);

        if (this.unidade.codigo === codigo) {
          this.unidade.codigo == "";
        }
      }
    }        
  }
}
