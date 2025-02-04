import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-total-btn',
  imports: [],
  templateUrl: './total-btn.component.html',
  styleUrl: './total-btn.component.css',
})
export class TotalBtnComponent {
  cartService = inject(CartService);

  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  });
}
