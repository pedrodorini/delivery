import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurant } from './restaurants';

@Injectable()
export class RestaurantsService {

  private URL = '';

  constructor(private http: Http) { }

  public loadRestaurant(): Observable<Restaurant[]> {
    return this.http.get(`${this.URL}`)
    .map((res: Response) => res.json());
  }

}
