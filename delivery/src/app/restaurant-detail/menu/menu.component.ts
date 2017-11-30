import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { RestaurantsService } from '../../restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router/';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = []

  constructor(private restaurantService: RestaurantsService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.menuItems(this.router.snapshot.params["id"])
    .subscribe(menuItems => this.menuItems = menuItems)
  }

}
