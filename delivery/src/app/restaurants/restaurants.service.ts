import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Restaurant } from './restaurant.model';
import { APP_API } from '../app.api';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  public loadRestaurant(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${APP_API}/restaurants`)
  }

  public restaurantById(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${APP_API}/restaurants/${id}`)
  }
  menuItems(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${APP_API}/restaurants/${id}/menu`)
}

}
