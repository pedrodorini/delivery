class Order {
    constructor(
        public address: string,
        public number: number,
        public complement: string,
        public payment_option: string,
        public id?: number
    ) {}
}

class OrderItem {
    constructor(public quantity: number, public menuId: number) {}
}

export { Order, OrderItem }
