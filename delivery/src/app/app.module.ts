import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ROUTES } from './app.routes'
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantsService } from './restaurants/restaurants.service'
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from './order/order.service';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    OrderComponent,
    OrderItemsComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService,
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
