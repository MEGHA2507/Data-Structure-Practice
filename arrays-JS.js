// JavaScript Practice
// Arrays and Helper methods in Javascript

// forEach -> array helper
var colors = ["red", "blue", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function (color) {
  console.log(color);
});

// create an array of number
// create a varibale to hold the sum
// loop over the array, incrementing the sum variable
// print the sun variable

var numbers = [1, 2, 3, 4, 5];
var sum = 0;
numbers.forEach(function (number) {
  sum += number;
});

console.log(sum);

// map -> array helper

var numbers = [1, 2, 3];
var doubleNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log(doubleNumbers);

var doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

var cars = [
  { model: "Buick", price: "CHEAP" },
  { model: "Camaro", price: "expensive" },
];

var prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);

// filter

var products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}

console.log(filteredProducts);

var filteredProductsFruits = products.filter(function (product) {
  return product.type === "fruit";
});

console.log(filteredProductsFruits);

var productsList = [
  { name: "cucumber", type: "vegetable", quantity: 0, price: 1 },
  { name: "banana", type: "fruit", quantity: 10, price: 15 },
  { name: "celery", type: "vegetable", quantity: 30, price: 9 },
  { name: "orange", type: "fruit", quantity: 3, price: 5 },
];

var filteredList = productsList.filter(
  (product) =>
    product.type === "vegetable" && product.quantity > 0 && product.price < 10
);
console.log(filteredList);

// given a post and array of comments. We need to return all the comments
// associated with the post

var post = { id: 4, title: "New Post" };
var comments = [
  { postId: 4, content: "awesome post" },
  { postId: 3, content: "it was ok" },
  { postId: 4, content: "neat" },
  { postId: 4, content: "nice" },
  { postId: 2, content: "neat" },
];

function commentsForPost(post, comments) {
  return comments.filter((comment) => comment.postId === post.id);
}

console.log(commentsForPost(post, comments));

//find -> array helper which finds a particular element in an array and
// as soon as its found it returns that element

var users = [{ name: "Jill" }, { name: "Alex" }, { name: "Bill" }];

var user;

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Alex") {
    user = users[i];
    break;
  }
}

console.log(user);

user = users.find((user) => {
  return user.name === "Alex";
});

console.log(user);
// find method only returns the first element which
//satisfies the condition, it doesn't return
//other similar values if present in the array

var cars = [new Car("Buick"), new Car("Camaro"), new Car("Focus")];

function Car(model) {
  this.model = model;
}

var filteredCars = cars.find(function (car) {
  return car.model === "Focus";
});

console.log(filteredCars);

var posts = [
  { id: 1, title: "New Post" },
  { id: 2, title: "Old Post" },
];

var comment = {
  postId: 1,
  content: "Great Post",
};

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

console.log(postForComment(posts, comment));

//every
//some
//reduce

// forEach -> array help
