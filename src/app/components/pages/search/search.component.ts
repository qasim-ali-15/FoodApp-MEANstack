import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router,private api:FoodService){
    activatedRoute.params.subscribe((params)=>{
      
      if(params.searchTerm){
        this.searchTerm = params.searchTerm;
      }
    });
  }

  ngOnInit(): void {
      
  }
  search(term:string){
    if(term){
      this.router.navigateByUrl('/search/'+term);
  
    }
  
  }
}
