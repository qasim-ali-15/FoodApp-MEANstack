import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';
import { sample_foods } from 'src/data';
import { HttpClient } from '@angular/common/http';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_URL } from '../shared/environment/urls';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Food[]> {
    return this.httpClient.get<Food[]>(FOODS_URL);
  }

  //search food
  getAllFoodBySearchTerm(searchTerm: string) {
    return this.httpClient.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  //get food by ID
  getFoodById(foodId: string):Observable<Food> {
    return this.httpClient.get<Food>(FOODS_BY_ID_URL + foodId);
    // return foundFood ?? new Food();
  }
}
