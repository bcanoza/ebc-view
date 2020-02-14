import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from '../../environments/environment';


import { PaginationDTO } from '../util/pagination-DTO';
import { Unidade } from '../unidade/unidade';


@Injectable({
  providedIn: 'root'
})
export class UnidadeService {

  private readonly API = `${environment.API}unidades/`;

  constructor(private http: HttpClient) { }

  findAll(paginacao: string) {
    return this.http.get<PaginationDTO>(this.API + paginacao).pipe(take(1));
  }
    

  save(unidade: Unidade) {

    if (unidade.id < 1) {
      return this.http.post(this.API, unidade).pipe(take(1));
    } else {
      return this.http.put(this.API + unidade.id, unidade).pipe(take(1));
    }
    
  }

  findById(id: number): Unidade {
    return new Unidade();
  }

  delete(id: number) {
    console.log(this.API + id)
    return this.http.delete(this.API+id).pipe(take(1));
  }

}
