import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }

  ngOnInit(): void {
      // JavaScript to handle the navigation toggle on smaller screens
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
const navbar = document.querySelector('#navbar-default');

toggleButton?.addEventListener('click', () => {
  navbar?.classList.toggle('hidden'); // Toggle the "hidden" class on the navigation menu
});
  }



 
}
