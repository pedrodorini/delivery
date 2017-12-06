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
    paymentOption = 'cash'
    order = {
        address: '',
        number: 0,
        complement: '',
        paymentOption: ''
    }

    constructor(private orderService: OrderService,
                private formBuilder: FormBuilder,
                private route: Router) {}

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control('', [Validators.required, Validators.minLength(4)]),
            number: this.formBuilder.control('', [Validators.required]),
            complement: this.formBuilder.control(''),
            address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            paymentOption: this.formBuilder.control(this.paymentOption, [Validators.required])
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
        this.order.address = order.address
        this.order.number = order.number
        this.order.complement = order.complement
        this.order.paymentOption = order.paymentOption

        console.log(this.order)
        if (this.orderForm.valid) {
            this.orderService.checkOrder(order).subscribe(order => console.log(order))
        }
    //     order.orderItems = this.cartItems()
    //     .map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    //     this.orderService.checkOrder(order)
    //     .do((orderId: number) => {
    //         this.orderId = orderId
    //     })
    //   .subscribe((orderId: number) => {
    //       this.orderService.clear();
    //   })
    }
}
