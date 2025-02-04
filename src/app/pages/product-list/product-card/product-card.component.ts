import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { OfficeBtnComponent } from "../../../header/office-btn/office-btn.component";

@Component({
  selector: 'app-product-card',
  imports: [OfficeBtnComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  CartService = inject(CartService);

  product = input.required<Product>();
}
