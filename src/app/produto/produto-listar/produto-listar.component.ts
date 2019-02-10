import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'preco', 'unidadeMedida', 'categoria'];
  produtos: Produto[];

  constructor(private service: ProdutosService) { }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this.service.getListaProdutos().subscribe(
      (res) => {
        this.produtos = res; 
        console.log("produtos: ", this.produtos)
      },
      (err) => {
        alert('There is a problem!' + JSON.stringify(err)); 
      }
    );
  }

}
