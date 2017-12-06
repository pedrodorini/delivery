import { Component, OnInit } from '@angular/core';

import {ShoppingCartService} from './shopping-cart.service'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }
  items(): any[] {
    return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear()
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any) {
    this.shoppingCartService.addItem(item)
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  increaseQty(item: any) {
    this.shoppingCartService.increaseQty(item)
  }
  decreaseQty(item: any) {
    this.shoppingCartService.decreaseQty(item)
  }

}
