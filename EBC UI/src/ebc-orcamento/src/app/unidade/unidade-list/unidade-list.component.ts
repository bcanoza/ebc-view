import { Component, OnInit } from '@angular/core';
import { Unidade } from '../unidade';

import { PaginationDTO } from '../../util/pagination-DTO';
import { UnidadeService } from '../../service/unidade.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../util/alert-modal/alert-modal.component';
import { AlertModalService } from '../../util/alert-modal/alert-modal.service';

@Component({
  selector: 'unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.css']
})
export class UnidadeListComponent implements OnInit {

  unidades: Unidade[];  
  
  paginador: PaginationDTO = new PaginationDTO();


  headElements: string[] = ["Id", "Nome", "Código", "Ação"]
  listaPaginacao: number[] = [];

  constructor(private unidadeService: UnidadeService,
              private alertService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.findAll();
   }

  

  public findAll(): void {   

    this.unidadeService.findAll(this.paginador.converter()).subscribe(
      unidadePaginationDTO => {

        this.paginador.totalPages = unidadePaginationDTO.totalPages;
        this.paginador.totalElements = unidadePaginationDTO.totalElements;
        this.paginador.number = unidadePaginationDTO.number;

        this.unidades = <Unidade[]>unidadePaginationDTO.content;
        
      },
      error => {
        this.alertService.showAlertDanger("Erro ao carregar as unidades. Tente mais tarde!!!")
      },
      () => {        
      }
    );
  }

  deletar(unid: Unidade): void {
    this.unidadeService.delete(unid.id).subscribe(
      sucesso => { },
      error => {
        this.alertService.showAlertDanger("Erro ao deletar a unidade. Tente mais tarde!!!")
      },
      () => {
        this.alertService.showAlertSucess("Deletado com sucesso \o/!!!");
        this.unidades = this.unidades.filter(item => item != unid);
      }
    );
  }

  

  public sort(prop: string) {

    let last: string = null;

    if (prop === last) {
      this.unidades.reverse();
      this.paginador.sortReverse = !this.paginador.sortReverse;
      return;
    }

    if (prop === this.headElements[2]) {
      last = "codigo";;
      this.unidades.sort((a, b) => a.codigo.localeCompare(b.codigo))      
    } else if (prop === this.headElements[1]) {
      last = "nome";
      this.unidades.sort((a, b) => a.nome.localeCompare(b.nome));
    } else {
      last = "id";
      this.unidades.sort((a, b) => a.id - b.id);
    }

    if (this.paginador.sort === last) {
      this.paginador.sortReverse = !this.paginador.sortReverse;
    } else {
      this.paginador.sort = last;
      this.paginador.sortReverse = false;
    }

    if (this.paginador.sortReverse) {
      this.unidades.reverse();
    }   
  }

  public goToPage(pageNumber: number) {

    if (pageNumber < 1) {
      pageNumber = 1;
    }
    if (pageNumber > this.paginador.totalPages) {
      pageNumber = this.paginador.totalPages;
    }

    if (this.paginador.number != pageNumber) {
      this.paginador.number = pageNumber - 1;
      this.findAll();
    }

  }

  public goToPageFirst() {
    this.goToPage(1);
  }

  public goToPageNext() {
    this.goToPage(this.paginador.number+2);
  }

  public goToPageBack() {
    this.goToPage(this.paginador.number - 1);
  }

  public goToPageLast() {
    this.goToPage(this.paginador.totalPages);
  }


}
