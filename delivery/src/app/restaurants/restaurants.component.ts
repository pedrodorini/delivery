import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantsService) { }

  public ngOnInit() {
    this.loadAll();
  }

  public loadAll(): void {
    this.restaurantService.loadRestaurant()
      .subscribe(res => this.restaurants = res)
  }

}
