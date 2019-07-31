// # Class Exercises
//
// (1 - 6 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)
//
// ## Question 1
class Person {
  constructor(first, last, middle) {
    this.first = first;
    this.last = last;
    this.middle = middle;
  }

  fullName() {
    console.log(`${this.first} ${this.middle} ${this.last}`);
  }
}

// a. Write a class called `Person` that has 3 properties: a first name, a last name
//and a middle name. Create 2 instances of a `Person`. Print one of their first names.
console.log('----- Question 1a -----');
let beyonce = new Person('Beyoncé', 'Knowles-Carter', 'Giselle');
let solange = new Person('Solange', 'Knowles', 'Piaget');
console.log(beyonce);
console.log(solange);
console.log(beyonce.first);
console.log('');

//
// b. Write a method in `Person` called `fullName` that will return a formatted string
//of an instance's full name. Call this method on both the instances you created in part a.
console.log('----- Question 1b -----');
beyonce.fullName();
solange.fullName();
console.log('');

// ## Question 2
//
// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
class Book {
  constructor (title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }

  isGood() {
    if (this.rating >= 7) {
      return true;
    } return false;
  }
}
let book1 = new Book('26a', 'Diana Evans', 8.4);
let book2 = new Book('The Coldest Winter Ever', 'Sister Souljah', 9);
let book3 = new Book('Genesis Begins Again', 'Alicia D. Williams', 10);
let book4 = new Book('Trump: The Art of the Deal', 'Donald Trump', 0);
console.log('----- Question 2a -----');
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log('');

//
// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
console.log('----- Question 2b -----');
console.log(book4.isGood());
console.log(book3.isGood());
console.log('');

// ## Question 3
//
// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
class Dog {
  constructor (name, breed, mood, hungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.hungry = hungry;
  }

  playFetch() {
    this.hungry = true;
    this.mood = 'playful';
    console.log('Ruff!');
  }

  feed() {
    if (this.hungry) {
      this.hungry = false;
      console.log('Woof!');
    } else {console.log('The dog doesn\'t look hungry');
    }
  }
  toString() {
    console.log(`The dog's name is ${this.name} and is a ${this.breed}. ${this.name}'s mood is ${this.mood} and it is ${this.hungry} that ${this.name} is hungry.`);
  }
}
let lucky = new Dog('Lucky', 'Beagle', 'happy', true);
let pepper = new Dog('Pepper', 'Lab/Pitbull Terrier', 'happy', false);

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`,
//set its mood property to `playful`, and log "Ruff!"
console.log('----- Question 3b -----');
lucky.playFetch();
console.log('');

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false`
//and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log('----- Question 3c -----');
pepper.feed();
console.log('');

// d. Add a method called `toString` that returns a description of the dog:
console.log('----- Question 3d -----');
lucky.toString();
pepper.toString();
console.log('');

// ## Question 4
//
// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:
//
// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273
//
// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`,
//and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {
  Celsius: 0,
  Fahrenheit: 32,
  Kelvin: 273.15,
};
console.log('----- Question 4a -----');
console.log(freezingPoint);
console.log('');

//
// b. Make a class called `Celsius` that has one property: `celsius`, and two methods
//`getFahrenheitTemp`, and `getKelvinTemp`.
//
// ```js

// outsideTempt.celsius //returns 10.0
// outsideTempt.getKelvinTemp() //returns 283.0
// outsideTempt.getFahrenheitTemp() //returns 50.0
// ```
class Celsius {
  constructor(celsius) {
    this.celsius = celsius;

  }

  getFahrenheitTemp() {
    return (this.celsius * (9 / 5)) + 32;
  }

  getKelvinTemp() {
    return this.celsius + 273.15;
  }
  isBelowFreezing() {
    if (this.celsius < 0) {
      return true;
    } else { return false;
    }
  }
}
let outsideTempt = new Celsius(10);
console.log('----- Question 4b -----');
console.log(outsideTempt.celsius)
console.log(outsideTempt.getKelvinTemp());
console.log(outsideTempt.getFahrenheitTemp());

// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool`
//(true if the temperature is below freezing).
console.log('----- Question 4b -----');
console.log(outsideTempt.isBelowFreezing());
console.log('');

// ## Question 5
//
// a. Create a class called `Movie` that has properties for `name`, `year`,
//`genre`, `cast`, and `description`. Create an instance of your `Movie`
//
// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
//
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen
//as a man named Borat who was visiting America from Kazakhstan."
class Movie {
  constructor (name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }

  blurb() {
    console.log(`${this.name} came out in ${this.year}. It was a ${this.genre} film starring ${this.cast}, as ${this.description}.`);
  }
}
let movie1 = new Movie('The Cheetah Girl', '2003', 'Musical',
['Raven-Symoné', ' Adrienne Bailon', ' Kiely Williams', ' Sabrina Bryan'], 'four teens who aim to take the world by storm with their music');
console.log('----- Question 5b -----');
movie1.blurb();
console.log('');

//
// ## Question 6
//
// Write a constructor Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to
//properties of the same name.
class Vector{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
  }

  minus(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
  }
  getLength() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
}
}
var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3);
var v3 = new Vector(3, 4);
console.log('----- Question 6 -----');
 console.log(v1.plus(v2));
 console.log(v1.minus(v2));
 console.log(v3.getLength());
 console.log('');

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in
//`this` and the parameter) x and y values.
//
// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)
//
// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)
//
// ```js
// var v1 = new Vector(1, 2)
// var v2 = new Vector(2, 3)
// console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
// console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}
//
// var v3 = new Vector(3, 4)
// console.log(v3.getLength());
// // => 5
// ```
//
// ## Question 7
//
// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  static numberOfWheels() {
    return 4;
  }
}
let car = new Car('Nissan', 'Rogue');
console.log('----- Question 7a -----');
console.log(car);
console.log('');

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
console.log('----- Question 7b -----');
class Bike {
  constructor(gears, hasBell) {
    this.gears = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels() {
    return 2;
  }
}
let bike = new Bike(10, true);
console.log(bike);
console.log('');

// c. Give each class a static method called `numberOfWheels` that returns the number of
//wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?
console.log('----- Question 7c -----');
console.log(Car.numberOfWheels());
console.log(Bike.numberOfWheels());
console.log('It makes sense for this to be a static method because cars have 4 wheels and bikes have 2 wheels.')
console.log('');

// ## Question 8
//
// a. Make a class called `Vehicle` with properties `color` and `name`.
//Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
class Vehicle {
  constructor(color, name) {
    this.color = color;
    this.name = name;
  }
  makeSound() {
    console.log('WHHOOSSSH');
  }
}
let truck = new Vehicle('black', 'Bob');

console.log('----- Question 8a -----');
truck.makeSound();
console.log('');
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
class Car1 extends Vehicle {
  constructor(color, name, make, model) {
    super(color, name);
    this.make = make;
    this.model = model;
  }

  static numberOfWheels() {
    return 4;
  }
}
class Bike1 extends Vehicle {
  constructor(color, name, gears, hasBell) {
    super(color, name);
    this.gears = gears;
    this.hasBell = hasBell;
  }

  static numberOfWheels() {
    return 2;
  }
}

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
console.log('----- Question 8c -----');
let bike1 = new Bike1('green', 'Bikey McBikeface', 10, true);
console.log(bike1);

// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
console.log('----- Question 8d -----');
let car1 = new Car1('red', 'Carry McCarface', 'Nissan', 'Rogue');
console.log(car1);
