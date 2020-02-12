import { Unidade } from '../unidade/unidade';

export class PaginationDTO {

  public content: Object[];

  public totalElements: number;
  public totalPages: number;

  public last: boolean;
  public first: boolean;

  
  public size: number = 2;
  public number: number = 0;
  public empty: boolean;

  constructor() {    
  }

  public converter(): string {
    
    return "?page=" + (this.number) +
      "&size=" + this.size;
  }
}
