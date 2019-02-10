import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';

const routes: Routes = [
  {path: 'listar', component: ProdutoListarComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
