import { Component, OnInit } from '@angular/core';
import { Unidade } from '../unidade';
import { UnidadeService } from '../unidade.service';
import { PaginationDTO } from '../../util/pagination-DTO';

@Component({
  selector: 'unidade-list',
  templateUrl: './unidade-list.component.html',
  styleUrls: ['./unidade-list.component.css']
})
export class UnidadeListComponent implements OnInit {

  unidades: Unidade[];
  unidade: Unidade;
  paginador: PaginationDTO = new PaginationDTO();

  headElements: string[] = ["Id", "Nome", "Código", "Ação"]
  listaPaginacao: number[] = [];

  constructor(private unidadeService: UnidadeService) { }

  ngOnInit(): void {
    this.findAll();    
   }

  public findAll(): void {

    console.log(this.paginador.size);

    this.unidadeService.findAll(this.paginador.converter()).subscribe(
      unidadePaginationDTO => {

        this.paginador.totalPages = unidadePaginationDTO.totalPages;
        this.paginador.totalElements = unidadePaginationDTO.totalElements;
        this.paginador.number = unidadePaginationDTO.number;
        
        this.unidades = <Unidade[]>unidadePaginationDTO.content;


        this.listaPaginacao = [];
        let i = 0;

        let range: number = 5;
        if (this.paginador.totalPages < range) {
          range = this.paginador.totalPages;
        }

        for (i; i < range; i++) {
          this.listaPaginacao[i] = (this.paginador.number -i);

          if (this.listaPaginacao[i] == 0) {
            break;
          }
        }

        for (i; i < range; i++) {
          this.listaPaginacao[i] = (i + this.paginador.number);

          if (this.listaPaginacao[i] > this.paginador.totalPages) {
            break;
          }
        }
      }
    );
  }

  nova(): void {
    this.unidade = new Unidade();
  }

  editar(unid: Unidade): void {
    this.unidade = unid;
    this.unidadeService.findById(unid.id);
  }

  deletar(unid: Unidade): void {
    this.unidadeService.delete(unid.id);
  }



}
