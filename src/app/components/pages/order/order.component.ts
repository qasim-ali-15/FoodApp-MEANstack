import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  shippingDetails: any = {
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  };

  constructor() {}

  ngOnInit(): void {}

  submitShippingDetails() {
    // Implement your logic here to handle the shipping details.
    // You can send the shipping details to your backend server or perform any other actions as needed.
    console.log('Shipping Details:', this.shippingDetails);
  }
}
