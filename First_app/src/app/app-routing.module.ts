import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouvelleCategorieComponent } from './nouvelle-categorie/nouvelle-categorie.component';
import { CategoriesComponent } from './categories/categories.component';
const routes: Routes = [
  {path:"categories", component:CategoriesComponent},
  {path:"nouvelle-categorie", component:NouvelleCategorieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
