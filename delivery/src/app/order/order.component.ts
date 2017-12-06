import { Component, OnInit } from '@angular/core'
import { OrderService } from './order.service'
import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model'
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms'
import { Order, OrderItem } from './order.model'
import { Router } from '@angular/router'
import 'rxjs/add/operator/do'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    deliveryFee = 3
    orderForm: FormGroup
    orderId: number

  constructor(private orderService: OrderService,
              private formBuilder: FormBuilder,
              private route: Router) {}

  ngOnInit() {
      this.orderForm = this.formBuilder.group({
          name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
          address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
          number: this.formBuilder.control('', [Validators.required]),
          complement: this.formBuilder.control('')
      })
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
}

  cartItems(): CartItem[] {
      return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
      this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
      this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
      this.orderService.remove(item)
  }
  clear() {
    this.orderService.clear();
  }

  total() {
    let itemsValue = this.itemsValue()
    return itemsValue += this.deliveryFee

 }
  checkOrder(order: Order) {
      order.orderItems = this.cartItems()
      .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
      this.orderService.checkOrder(order)
      .do((orderId: number) => {
          this.orderId = orderId
      })
      .subscribe((orderId: number) => {
          this.orderService.clear();
      })
  }

}
