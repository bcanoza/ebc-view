import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


import { Unidade } from './unidade';
import { PaginationDTO } from '../util/pagination-DTO';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {
    
  constructor(private http: HttpClient) { }

  findAll(paginacao: string) {
    
    return this.http.get<PaginationDTO>("http://localhost:8080/unidades" + paginacao);

  }
    

  save(unidade: Unidade) {

    console.log(unidade);
    
  }

  findById(id: number): Unidade {
    return new Unidade();
  }

  delete(id: number) {
    console.log(id);
  }

}
