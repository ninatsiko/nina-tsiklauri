//console.log('hello world');

//console.log("second log");

//primitv types 

let name = 'john'; //string

let age = 32; //number

let canBuyAlcohol = true; //boolean

let car; //undefined

let dataFetched = null; //null

let id = Symbol('id'); //symbol


//referrence types 

var person = {
    name : 'John',
    lastname : 'Smith',
    age : 32,
    certificates : null,
} // object

person.fatherName = 'Mathew';

//delete person.name;

let kilogramArr = [10,20,30,40,117];
let userArr = [{name : 'sam', lastname : 'smith'},person, 10] //array

console.log(typeof kilogramArr)

let tp = typeof kilogramArr;

console.log(typeof tp)

//console.log(person)


let num1 = 32;

let num2 = 33;

let result = num1 + num2;

let num3 = 34;

let num4 = 42;

let result1 = num3 + num4;

function sum(x,y) {
    console.log(x+y);
}

function sayHello () {
    console.log('say hi')
}

let x = sum(23,42)
sum(10,12) //function 

console.dir(typeof sum)

sayHello();
sayHello();
sayHello();
sayHello();


for(let i = 0; i < kilogramArr.length; i++) {
    console.log(kilogramArr[i])
} 
