import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-cart',
  imports: [],
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
