import { Component, inject } from '@angular/core';
import { OfficeBtnComponent } from "./office-btn/office-btn.component";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  imports: [OfficeBtnComponent],
templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  CartService=inject(CartService);
  handlebtn(){
    console.log('Office Button Clicked');
  }

}
