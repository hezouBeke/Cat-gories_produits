import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BidingComponent } from './biding/biding.component';
import { CategoriesComponent } from './categories/categories.component';
import { NouvelleCategorieComponent } from './nouvelle-categorie/nouvelle-categorie.component';


@NgModule({
  declarations: [
    AppComponent,
    BidingComponent,
    CategoriesComponent,
    NouvelleCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
