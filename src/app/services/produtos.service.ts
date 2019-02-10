import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../produto/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  //private apiUrl = 'http://localhost:8080';
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getListaProdutos(): Observable<Produto[]> {
    const url = this.apiUrl + 'produtos';
    return this.http.get<Produto[]>(url);
  }


}
