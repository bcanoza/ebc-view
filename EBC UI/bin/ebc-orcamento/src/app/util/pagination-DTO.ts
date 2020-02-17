import { Unidade } from '../unidade/unidade';

export class PaginationDTO { 

  public content: Object[];

  public totalElements: number;
  public totalPages: number;

  public last: boolean;
  public first: boolean;

  
  public size: number = 10;
  public number: number = 0;
  public empty: boolean;

  public sort: String = "id";
  public sortReverse: boolean = false;

  constructor() {    
  }

  public converter(): string {
    this.check();
    let ordem = ",asc";

    if (this.sortReverse) {
      ordem = ",desc";
    }

    return "?page=" + (this.number) +
      "&size=" + this.size +
      "&sort=" + this.sort
      + ordem
      ;
  }

  check() {
    if (this.number * this.size > this.totalElements){
      this.number = 0;
    }
  }
}
