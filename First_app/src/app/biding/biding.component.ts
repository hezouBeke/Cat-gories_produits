import { Component } from '@angular/core';

@Component({
  selector: 'app-biding',
  templateUrl: './biding.component.html',
  styleUrls: ['./biding.component.scss']
})
export class BidingComponent {
  
  title : String = "Tout connais pas encore";
  status : Boolean = false;

  ChangerTitre(){
    this.title ="Rino faut pas faire hien !  "
  }
  name: String = "tchitchi gueti"

}
