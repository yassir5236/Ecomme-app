import { Component, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  async ngOnInit() {

    const res = await  fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    this.products.set(data);

    
  }

  products = signal<Product[]>([
    // { id: 1, title: 'Product 1', image:  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", price: 100 , stock:0},
    // { id: 2, title: 'Product 2', image:  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", price: 200 , stock:10},
    // { id: 3, title: 'Product 3', image:  "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", price: 300 , stock:15}
  ]);

}
