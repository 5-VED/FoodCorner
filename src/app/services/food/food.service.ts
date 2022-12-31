import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food.model';
import { Tags } from 'src/app/shared/models/tags';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getFoodByTag(tag: string): Food[] {
    if (tag === 'All') {
      return this.getAllFood();
    } else {
      return this.getAllFood().filter((food) => food['tags']?.includes(tag));
    }
  }

  getAllTags(): Tags[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAllFood(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favourite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favourite: true,
        origins: ['persia', 'middle east', 'china'],
        star: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favourite: false,
        origins: ['germany', 'us'],
        star: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fryed Potatoes',
        price: 2,
        cookTime: '15-20',
        favourite: true,
        origins: ['belgium', 'france'],
        star: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favourite: false,
        origins: ['india', 'asia'],
        star: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favourite: false,
        origins: ['italy'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Chinese Noodels',
        price: 10,
        cookTime: '40-50',
        favourite: true,
        origins: ['India'],
        star: 4.0,
        imageUrl: '/assets/images/foods/food-7.jpg',
        tags: ['FastFood', 'Lunch'],
      },
      {
        id: 8,
        name: 'Pav Bhaju',
        price: 5,
        cookTime: '40-50',
        favourite: true,
        origins: ['India'],
        star: 4.5,
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['FastFood', 'Lunch'],
      },
    ];
  }

}
