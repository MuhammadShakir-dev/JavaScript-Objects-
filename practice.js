// Create an object called "person" with properties "name", "age", and "occupation". 
// Assign appropriate values to these properties and log the person object to the console.

const person = {
    name: "Muhammad Shakir",
    age: 22,
    occupation : "Front-end Developer"
}

console.log(person);

//Given the following object:
// Add a new property called "price" with a value of 25000 to the car object.
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
};
  
car.price = 25000;
console.log(car);

// Write a function that takes an object as a parameter and returns the number of properties in that object.
// -> create a function.
// -> pas a parameter within that function as an object.
// -> function should return the number of properties that an object contains.

function propCounter(object) {
    let count = Object.keys(object).length;
    console.log(count);
}

propCounter({
    name: "Shakir",
    age: 21,
    occupation: "Front-end developer",
    email: "muhammadshakirdev@gmail.com"
});

// Create two objects, "rectangle1" and "rectangle2", representing rectangles. Each object should have properties "length" and "width".
// Calculate and log the area(length * width) of both rectangles.

// -> create object 1 = reactangle1.
// -> create object 2 = reactangle2.
// -> both contains properties i.e {lenght , width}.
// -> calculate the print the area(lenght * width). of both rectangles.


const rectangle1 = {
    length: 10,
    width : 20
}

const rectangle2 = {
    length: 7.5,
    width: 15
}

console.log(rectangle1.length * rectangle1.width);
console.log(rectangle2.length * rectangle2.width);


//You are given an array of objects, each representing a product with properties "name" and "price".
// Write a function that takes the array as input and returns the total price of all products in the array.

// -> create an array and with in this array create two objects.
// -> each object contains two properties i.e : prodcut name and product price.
// -> create a function that takes the array as input.
// -> the function returns the total price of all products in the array.


var products = [
    {
        name: "Watch",
        price: 599,
    },

    {
        name: "Tshirt",
        price: 799,
    },

    {
        name: "Belt",
        price : 299,
    }
];

function total(products) {
    let sumOfProducts = products[0].price + products[1].price + products[2].price;
    console.log("The sum of your products is : " + sumOfProducts);
}

total(products);


// Write a function that takes an array of numbers as input and returns the highest and lowest numbers
// in the array as an object.

// -> create a function that take an array of numbers.
// -> function returns the highest and lowest present in the array.
// -> In the form of an object.

function aryOfNum(nums) { 
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    console.log(`The highest no is : ${max} and lowest no is :${min}`);
}

aryOfNum([12, 34, 56, 1, 2, 23223, 232333, 423432, 564654, 2132132, 6564564, 213123, 45435342]);


// -> create an object that containes properties : title, author, year.
// -> create a funtion that takes the book object as input and checks if it contains the "year" property.
// -> if it contains. then it will return book publication year other wise return year not avaliable.

const bookDetails = {
    title: "Monk who sold his ferreri",
    author: "Robin Sharma",
    year: 2021,
}

function yearChecker(bookDetails) { 
    if (Object.hasOwn(bookDetails,'year')) {
        console.log(bookDetails.year);
    } else { 
        console.log("Year doesnot avaliable");
    }
}

yearChecker(bookDetails);


//Given an object representing a shopping cart with properties "items" 
//(an array of product names) and "total"(total price).
// Write a function that takes the shopping cart object as input and returns the average price of the items.

const shoppingCart = {
    items: ["Tshirt", "Watch", "Pent"],
    price: [1300,1000,1200],
}

function avgtotal(shoppingCart) { 
    let avgPrice = (shoppingCart.price[0] + shoppingCart.price[1] + shoppingCart.price[2]) / 3;
    console.log("The average price of items is : " + avgPrice);
}

avgtotal(shoppingCart);
