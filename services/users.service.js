class OrdersService {
  constructor() {
    this.users = [];
  }

  create() {}
  find() {
    return this.users;
  }
  findOne(id) {
    return this.users.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}
module.exports = OrdersService;
