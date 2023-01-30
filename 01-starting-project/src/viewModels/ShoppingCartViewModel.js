export class ShoppingCartViewModel {
    title;
    quantity;
    price;
    
    constructor(title, price, quantity) {
        this.title = title;
        this.price = (price * quantity).toFixed(2);
        this.quantity = quantity
    }
}