import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food.model';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(private fs: FoodService, private router: ActivatedRoute) {


    router.params.subscribe((params) => {
      if (params['id']) this.food = this.fs.getFoodById(params['id']);
      console.log(this.food);
      // console.log(this.tagProperty);

    });
  }

  ngOnInit(): void {
  }
}
