import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

import { Unidade } from '../unidade';

import { MinhaValidacao } from '../../util/minha-validacao';
import { UnidadeService } from '../../service/unidade.service';
import { BsModalService } from 'ngx-bootstrap/modal/public_api';
import { AlertModalService } from '../../util/alert-modal/alert-modal.service';

@Component({
  selector: 'unidade-form',
  templateUrl: './unidade-form.component.html',
  styleUrls: ['./unidade-form.component.css']
})
export class UnidadeFormComponent implements OnInit {

  formulario: FormGroup;
  @Output() save: EventEmitter<any> = new EventEmitter();
  
  constructor(
    private unidadeService: UnidadeService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {   

    this.formulario = this.formBuilder.group({
      id: [null ],
      nome: [null, [Validators.required]],
      codigo: [null, [Validators.required, Validators.maxLength(8)]],
      codigos: this.formBuilder.array([], [Validators.required, MinhaValidacao.unique])
    });
  }

  saveUnidade(): void {
    this.unidadeService.save(this.unidade).subscribe(
      unidade => {
        this.save.emit(unidade);
      },
      error => {
        this.alertService.showAlertDanger("Não conseguei salvar :(")
      },
      () => {
        this.resetForm();
        this.alertService.showAlertSucess("Salvo com sucesso \o/");
      }
    );
    
  }

  setCodigoPreferencial(codigo: number): void {
    this.codigo.setValue(this.codigos.at(codigo).value);
  }
   
  newCodigo(): void {
    this.codigos.push(this.formBuilder.control(null, [Validators.required, Validators.maxLength(8)]));
  }

  deleteCodigo(codigo: number): void {
    console.log(this.codigos.at(codigo));
    if (this.codigos.at(codigo).value == this.codigo.value) {
      this.alertService.showAlertDanger("Não posso deletar a unidade preferencial")
      return;
    }
    this.codigos.removeAt(codigo);    
  }
 
  resetForm(): void {
    this.formulario.reset();
    this.codigos.clear();
  }

  aplicaCssErro(campo) { 
    return {
      'is-invalid': this.isFieldInvalid(campo),
    }
  }

  isFieldInvalid(campo: string) {
    return this.formulario.get(campo).invalid && (this.formulario.get(campo).touched || this.formulario.get(campo).dirty);
  }

  get codigos(): FormArray {
    return <FormArray>this.formulario.get("codigos");
  }

  get codigo() {
    return this.formulario.get("codigo");
  }

  set unidade(unidade: Unidade) {
    this.resetForm();

    if (unidade == null) {
      return;
    }

    unidade?.codigos.forEach(cdg => {
      this.codigos.push(this.formBuilder.control(cdg, [Validators.required, Validators.maxLength(8)]));
    })

    this.formulario.setValue(unidade);
    
  }

  get unidade(): Unidade {
    return Object.assign(new Unidade(), this.formulario.value);
  }
}
