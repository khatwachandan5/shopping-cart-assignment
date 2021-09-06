const { DataStore } = require('notarealdb');

const store = new DataStore('./staticData');
module.exports = {
  users: store.collection('users'),
  banner: store.collection('banner'),
  categories:store.collection('categories'),
  products: store.collection('products')
};
