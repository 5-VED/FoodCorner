import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/models/cart-item';
import { Food } from '../shared/models/food.model';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart: Cart = this.cartService.getCart();
  cartItems: CartItem[] = this.cart.item;
  foods:Food[]=[];

  constructor(private cartService: CartService,private foodService:FoodService ) {

  }

  ngOnInit(): void {
    this.setCart();
     this.foods[0] = this.foodService.getFoodById(1)
     this.foods[1] = this.foodService.getFoodById(2)
  }




  setCart() {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(quantity, cartItem.food.id);
    this.setCart();
  }
}
