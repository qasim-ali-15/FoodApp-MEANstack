import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAll(): Food[] {
    return sample_foods;
  }

  //search food
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  //get food by ID
  getFoodById(foodId: string) {
    return this.getAll().find(food => food.id === foodId) ?? new Food();
    // return foundFood ?? new Food();
  }
  
}
