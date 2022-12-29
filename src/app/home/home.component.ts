import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foodList: Food[] = [];
  constructor(private fs: FoodService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.foodList = this.fs.getAllFood();

    this.router.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foodList = this.fs
          .getAllFood()
          .filter((food) =>
            food['name']
              .toLowerCase()
              .includes(params['searchItem'].toLowerCase())
          );
      } else {
        this.foodList = this.fs.getAllFood();
      }
    });
  }
}
