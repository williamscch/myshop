class OrdersService {
  constructor() {
  }
  create() {}
  find() {
    return this.orders;
  }
  findOne(id) {
    return this.orders.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}
module.exports = OrdersService;
