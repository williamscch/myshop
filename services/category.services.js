class CategoryService {
  constructor() {
    this.categories = [];

  }

  create() {}
  find() {
    return this.categories;
  }
  findOne(id) {
    return this.categories.find((item) => item.id === id);
  }
  update() {}
  delete() {}
}
module.exports = CategoryService;
