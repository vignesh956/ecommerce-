import { Component, OnInit } from '@angular/core';
import { SelectmobileService } from '../../selectmobile.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  articles = [];
  totalPrice = 0;

  constructor(private productsService: SelectmobileService ) {
    this.productsService.getData().subscribe((cart: any) => {
      console.log(cart, 'cart data');
      this.articles = cart;
      console.log(this.articles);
    });
  }
  ngOnInit(): void {
    console.log(this.totalPrice)
    this.articles.forEach((item: any) => {
      this.totalPrice += item.talk.price * item.quantity;
    });
    console.log(this.totalPrice);
  }
}
