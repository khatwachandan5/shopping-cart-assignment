const db = require('./db');

const Query = {
  banners: () => db.banner.list(),
  category:(root, {id}) => db.categories.get(id),
  categories: () => db.categories.list(),
  product:(root, {id}) => db.product.get(id),
  products:() => db.products.list(),
};

const Category = {
  products: (category) => db.products.list()
    .filter((product) => product.category === category.id)
};

const Product = {
  category: (product) => db.categories.get(product.category)
};

module.exports = { Query, Category, Product };
