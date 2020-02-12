import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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

  formulario: FormGroup;
  
  constructor(private unidadeService: UnidadeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.unidade = new Unidade();

    this.formulario = this.formBuilder.group({
      id: [{ value: null, disabled: true} ],
      nome: [null, [Validators.required]],
      codigo: [null, [Validators.required, Validators.maxLength(8)]],
      codigoNovo: [null, [Validators.required, Validators.maxLength(8)]],
      codigos: this.formBuilder.group({})
    });
  }

    

  setPreferencial(codigo: string): void {
    this.unidade.codigo = codigo;
    this.formulario.get("codigo").setValue(codigo);
  }

  salvarUnidade(): void {
    console.log(JSON.stringify(this.formulario.value));
    this.unidadeService.save(this.unidade);
    this.resetForm();
  }

  editarCodigo(codigo: string): void {
    this.formulario.patchValue({
      codigoNovo: codigo
    });

    this.remover(codigo);
  }

  adicionarCodigo(codigo:string): void {

    if (this.unidade.codigo == "") {
      this.unidade.codigo = codigo;
      this.formulario.get("codigo").setValue(codigo);
      
    }
    this.formulario.patchValue({
      codigoNovo: ""
    });
    this.unidade.codigos.push(codigo);    
  }

  deletarCodigo(codigo: string): void {

    if (codigo == this.unidade.codigo) {
      alert("Não posso deletar a unidade preferencial");
      return;
    }

    this.remover(codigo);
  }

  remover(codigo: string) {

    for (let i = 0; i < this.unidade.codigos.length; i++) {
      if (this.unidade.codigos[i] === codigo) {
        this.unidade.codigos.splice(i, 1);

        if (this.unidade.codigo === codigo) {
          this.unidade.codigo == "";
          this.formulario.get("codigo").setValue("");
        }
      }
    }  
  }


  resetForm(): void {
    this.formulario.reset();
  }

  aplicaCssErro(campo) { 
    return {
      'is-invalid': this.isFieldInvalid(campo),
    }
  }

  isFieldInvalid(campo: string) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

}
