import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { TotalBtnComponent } from "./total-btn/total-btn.component";

@Component({
  selector: 'app-cart',
  imports: [TotalBtnComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  CartService = inject(CartService);

  remove(Product: Product) {
    this.CartService.cart();
  }
  add(Product: Product) {
    this.CartService.addToCart(Product);
  }

}
