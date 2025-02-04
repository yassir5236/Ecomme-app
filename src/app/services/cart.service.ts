import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=signal<Product[]>([]);

  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
    console.log('Product added to cart:', product);
  }

  removeFromCart(productId: number) {
    this.cart.set(this.cart().filter(p => p.id!== productId));
    console.log('Product removed from cart:', productId);
  }
  constructor() { }
}
