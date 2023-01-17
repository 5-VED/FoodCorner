import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food.model';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food ;

  constructor(private fs: FoodService, private router: ActivatedRoute,private _router:Router ,private cartService:CartService) {
    router.params.subscribe((params) => {
      if (params['id']) this.food = this.fs.getFoodById(params['id']);
    });
  }

  ngOnInit(): void {
  }

  cartPage(){
   this.cartService.addToCart(this.food);
   this._router.navigateByUrl('/cart-page')
  }

}
