import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant.model';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant = {id: 0, name: '', category: '', img_path: ''}

  constructor(private restaurantService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.restaurantById(this.route.snapshot.params["id"])
    .subscribe(restaurant => {
      this.restaurant = restaurant
      this.restaurant.img_path = '../' + restaurant.img_path
    })
  }

}
