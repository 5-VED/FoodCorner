import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartItem } from '../shared/models/cart-item';
import { Food } from '../shared/models/food.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food): void {
    let cartItem = this.cart.item.find((item) => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
    }
    this.cart.item.push(new CartItem(food));
  }

  removeFromCart(foodId: number) {
    this.cart.item = this.cart.item.filter((item) => item.food.id !== foodId);
  }

  changeQuantity(quantity: number, foodId: number): void {
    let cartItem = this.cart.item.find((item) => item.food.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
