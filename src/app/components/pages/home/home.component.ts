import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private api:FoodService, activatedRoute: ActivatedRoute){
    let foodObservable : Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        // foodObservable = this.api.getAllFoodBySearchTerm(params.searchTerm)
        this.api.getAllFoodBySearchTerm(params.searchTerm).subscribe(res=>{
          this.foods=res
        })
      }
      else{
        foodObservable = api.getAll();
        foodObservable.subscribe((serverFoods)=>{
          this.foods = serverFoods;
        })
      }
    })
  }

  ngOnInit(){
  }

}
