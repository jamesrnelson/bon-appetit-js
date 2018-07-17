export default class Pantry {
  constructor () {
    this.stock = {};
  }

  stockCheck (ingredientName) {
    return this.stock[ingredientName] || 0;
  }

  restock (ingredientName, quantity) {
    let newAmount = this.stockCheck(ingredientName) + quantity;
    return this.stock[ingredientName] = newAmount;
  }
}
