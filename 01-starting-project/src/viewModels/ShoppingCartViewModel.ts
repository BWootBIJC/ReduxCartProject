export class ShoppingCartViewModel {
    title: string;
    quantity: number;
    price: number;
    
    constructor(title: string, price: number, quantity: number) {
        this.title = title;
        this.price = (price * quantity);
        this.quantity = quantity
    }
}