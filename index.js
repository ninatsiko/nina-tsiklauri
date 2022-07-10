// ცვლადები

var companyName = "ბიურო\"რქები და ჩლიქები\"";
console.log (companyName)

var isAlive = true;
var isDead = false;
console.log(isAlive)

var isAlive;
console.log(isAlive)

var isAlive;
console.log(isAlive); 
isAlive = null;
console.log(isAlive); 
isAlive = undefined;  
console.log(isAlive); 

var xNumber;
console.log(xNumber)
var xNumbera = 45;
console.log(xNumbera)
var xNumberb = "45"
console.log(xNumberb)

var xNumber = 45;
var yNumber = xNumber + 10;
console.log(yNumber)

var xNumber = "45";
var yNumber = xNumber + 5;
console.log(yNumber)

// string,number,undefined,null, boolean
var name = 'ნინა';
console.log (typeof name)

var number = 45;
console.log (typeof number)

var isEnabled = true;
console.log(typeof isEnabled)

var undefVariable;
console.log (typeof undefVariable)

//ოპერაცია ცვლადებზე

var x = 10;
var y = x + 50;
console.log (y)

var x = 10;
var y = x - 50;
console.log (y)

var x = 5;
var y = x * 5;
console.log (y)

var x = 10;
var y = x / 50;
console.log (y)

var x = 41;
var y = 7;
var z = x % y;
console.log (z)

//ინკრემენტი
var x = 5;
x++;
console.log(x)

//პრეფიქსული ინკრემენტი
var x = 5;
var z = ++x;
console.log(z)
console.log(x)

//პოსტფიქსური ინკრემენტი
var a = 5;
var b = a++;
console.log(a)
console.log(b)

//დეკრემენტი
var x = 5;
var z = --x;
console.log(x)
console.log(z)

var x = 5;
var y = x--;
console.log(x)
console.log(y)

var x = 10;
var y = 1 + (4-1) * --x;
console.log(y)

//მინიჭების ოპერაციები 
//= : ანიჭებს ცვლადს გარკვეულ მნიშვნელობას

var x = 10

// += არის შეკრება მნიშვნელობის შემდგომი მინიჭებით:

var a = 20
a += 5 // იგივეა რაც a = a + 5
console.log(a)

//-= : გამოკლება მნიშვნელობის შემდგომი მინიჭებით:

var a = 10
a -= 5 // იგივეა რაც a = a - 5
console.log(a)

//*= : გამრავლება მნიშვნელობის შემდგომი მინიჭებით:

var a = 5
a *= 2 // იგივეა რაც a = a * 2
console.log(a)

///= : გაყოფა მნიშვნელობის შემდგომი მინიჭებით:

var a = 10
a /= 2 //იგივეა რაც a = a / 2
console.log(a)

//%= : გაყოფის ნაშთი მნიშვნელობის შემდგომი მინიჭებით:

var a = 10
a %= 3 // იგივეა რაც a = a % 3
console.log(a)

//შედარების ოპერატორი

var income = 100;
var strIncome = "100";
var result1 = income == strIncome;
var result2 = income === strIncome;
console.log(result1); //true
console.log(result2); //false

//ლოგიკური ოპერაციები

//&&: აბრუნებს true-ს, თუ შედარების ორივე ოპერაცია აბრუნებს true-ს, წინააღმდეგ შემთხვევაში აბრუნებს false-ს:

var x = 100;
var y = 10;
var result = x > 50 && y < 20
console.log(result)

//||: აბრუნებს true-ს, თუ შედარების ერთ-ერთი ოპერაცია მაინც აბრუნებს true-ს, წინააღმდეგ შემთხვევაში აბრუნებს false-ს:

var x = 100;
var y = true;
var result = x > 50 || y == false;
console.log(result)

//! : აბრუნებს true-ს, თუ შედარების ეოპერაცია აბრუნებს false-ს, წინააღმდეგ შემთხვევაშია ბრუნებს false-ს:

var x = 100
var result = !(x < 200);
console.log (result)

var x = true
var result = !x
console.log(result)

//ოპერაციები სტრინგებზე

var name = "nina"
var surName = "tsiklauri"
var fullName = name + ' ' + surName
console.log(fullName)

var name = "nina";
var fullname = name + 256;
console.log(fullname);

// work

var sum = 500
var percent = 10
var inCome = sum * percent
sum = sum + inCome
console.log("შემოსავალი ანაბარზე: " + inCome)
console.log("ანაბრის თანხა პირველი წლის შემდეგ: " + sum)


//სტრინგის გარდაქმნა ნამბერად

var number1 = "10"
var number2 = "5"
var result = number1 + number2
console.log(result)

var number1 = "10"
var number2 = "5"
var result = parseInt(number1) + parseInt(number2)
console.log(result)

//სტრიქონის გარდაქმნა ათწილადად

var number1 = "1.25"
var number2 = "3.45"
var result = parseFloat(number1) + parseFloat(number2)
console.log(result)

var num1 = "123nina"
var result = parseInt(num1)
console.log(result)

var num1 = "nina"
var num2 = 123
var result = isNaN(num1)
console.log(result)

var result2 = isNaN(num2)
console.log(result2)

//ორობითი რიცხვის გადაყვანა

var num1 = 110
var num2 = parseInt(num1,2)
console.log(num2)

//work

var strSum = prompt("შეიყვანეთ ანაბრის თანხა", 1000)
var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი", 10);
var sum = parseInt(strSum);
var procent = parseInt(strPercent);
sum = sum + sum * procent / 100;
alert("პროცენტების დარიცხვის შემდეგ ანაბრის თანხა იქნება: " + sum);



// მასივები

var myArray = new Array()

var myArray = []

var people = ['nina', 'ani', 'saba']
console.log(people)
console.log(people[2])
console.log(people[0])
console.log(people[10]) //undefined
people[0] = 'mariami' //change
console.log(people[0]) 
people [7] = 'tom'
console.log(people[7])

//მრავალგანზომილებიანი მასივები

var number1 =[1,2,3,4,5] // ერთგანზომილებიანი
var number2 = [[1,2,3], [4,5,6]] //ორგანზომილებიანი

var people = [['tom', 26, false], [ 'nina', 21, true], ['ani', 21, true]]
console.log(people[0])
console.log(people[2])

var tomInfo = people[0]
console.log("სახელი: " + people[0][0]);
console.log('ასაკი: ' + people [0][1])

people [0][1] = 100
console.log('ასაკი: ' + people [0][1])

people[1] = ["Bob", 29, false]
console.log(people[1][0])

var numbers = []
numbers [0] = []
numbers[0][0]=[]
numbers [0][0][0] = 5
console.log(numbers [0][0][0])

// ოპერატორი if

var inCome = 100
if (inCome > 50) alert ('i love you')

var inCome = 100
if (inCome > 50){
    var message = ('i love you') 
}
console.log(message) // or alert

var inCome = 100
var age = 21
if (inCome > 50 && age < 30){
    var message = ('i love you')
}
console.log(message)

var myVar = 89
if (myVar){
    console.log('nina')
}

if (typeof myVar != undefined){
    console.log('nina')
}

var age = 21
if (age < 10){
    console.log('false')
} else{
    console.log('true')
}

var inCome = 300
if (inCome < 200){
    console.log('nina')
}else if (inCome >= 200 && inCome <= 400){
    console.log('tsiklauri')
}else{
    console.log('javascript')
}

var inCome = 300
if (inCome < 200){
    console.log('nina')
}else if (inCome >= 200 && inCome <= 400){
    console.log('tsiklauri')
}else if ( inCome > 200 && inCome >= 400){
    console.log('javascript')
}else{
    console.log('davigale')
}


// true and false 

// undefined: აბრუნებს false-ს
// null: აბრუნებს false-ს
// Boolean: თუ ცვლადის მნიშვნელობაა false, აბრუნებს false-ს. შესაბამისად, თუ ცვლადის მნიშვნელობაა true, აბრუნებს true-ს
// Number: აბრუნებს false-ს, თუ რიცხვი ტოლია0-ის ან NaN (Not a Number), სხვა ყველა შემთხვევაში ბრუნდება true
// -1 false,0 false, 1 true

var x = NaN
if(x){
    //false
}

//string

var x = ""
var y = 'javascript'
console.log(Boolean(x)) //false
console.log(Boolean(y)) //true

//object always true

var user = {name:"Tom"};    // true
var isEnabled = new Boolean(false)  // true
var car = {}    // true

console.log(undefined==null) //true

console.log(undefined===null) //false


//switch case

var inCome = 300
switch (inCome){
    case 100 :
        console.log(100);
        break;
    case 200 :
        console.log(200);
        break
    case 300 :
        console.log(300)    
        break
}

var income = 400;
switch (income) {
    case 100:
        console.log(100);
        break;
    case 200:
        console.log(200);
        break;
    case 300:
        console.log(300);
        break;
    default:
        console.log(0);
        break;
}

//ტერნარული ოპერაცია

var a = 1
var b = 2
var result = a < b ? a + b : a - b
console.log(result)


//for, for..in,while, do..whilefor

//for

var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = 0; i<people.length; i++){    
    console.log(people[i])
}

var people = ["Tom", "Alice", "Bob", "Sam"];
for(var i = people.length - 1; i >= 0; i--){    
    console.log(people[i])
}

//for..in

var people = ["Tom", "Alice", "Bob", "Sam"];
for(var index in people){    
    console.log(people);
}

//while

var people = ["Tom", "Alice", "Bob", "Sam"];
var index = 0
while (index < people.length){
    console.log(people[index])
    index++
}

//do..while

var x = 1
do {
    console.log(x * 2)
    x++
}while (x < 5)

//ოპერატორები continue და break

var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (i = 0; i < array.length; i++){
    if(array[i] > 10)
    break
    console.log(array[i])
}

var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for(i = 0; i < array.length; i++){
    if (array[i] > 10)
    continue
    console.log(array[i])
}


//function

function display(){
    console.log('nina')
}
display();

var display = function(){
    console.log('nina')
}
display();

function goodMorning() {
    console.log("დილა მშვიდობისა!");
}
goodMorning();

var message = goodMorning;
message(); // დილა მშვიდობისა!

//ფუნქციის პარამეტრები

function display(x){
    var z = x * x
    console.log(x + ' kvadratshi aris ' + z)
}
display(5);


function display(x, y) {
    if (y === undefined) y = x;
    var z = x * y;
    console.log(x + " გამრავლებული " + y + "-ზე უდრის " + z );
}
display(6); // 36
display(6, 4) // 24

function display(){
    var z = 1
    for (i = 0; i < arguments.length; i++)
    z *= arguments[i]
    console.log(z)
}

display(2)
display(2,3)

// return

var y = 5
var z = square(y)
console.log(y + ' kvadratshi udris ' + z)
function square(x){
    return x * x
}

var z = square(y)


//function პარამეტრად

function display(x, func) {
    var message = func(x);
    document.write(message);
}
function welcomeMessage(time) {
    if (time < 12)
        return "დილა მშვიდობისა!";
    else
        return "დღე მშვიდობისა!";
}
display(13, welcomeMessage);

//ხედვის არე

// გლობალური ცვლადები

var x = 5

function displaySquare () {
    var z = x * x
    console.log(z)
}


// ლოკალური ცვლადები

function displaySquare() {
    var z = 10;
    console.log(z);
}

function displaySquare() {
    var z = 10;
    console.log(z);
}
console.log(z);  // შეცდომაა, რადგან z არ არსებობს


//var ფუნქციის გარეთ არ იძახებს 
function bar () {
    foo = '25';

}
bar()
console.log(foo)

function bar(){
    var foo = "25";
}
bar();
console.log(foo);   // შეცდომა

//strict mode


"use strict";
function bar() {
    foo = "25";
}
bar();
console.log(foo); // მივიღებთ შეცდომას

//strict mode შეიძლება დავაყენოთ ორი ხერხით:

// დავამატოთ გამოსახულება "strict mode" ჯავასკრიპტის კოდის დასაწყისში;
// დავამატოთ გამოსახულება "strict mode" ფუნქციის ტანის დასაწყისში. ამ შემთხვევაში, მკაცრი რეჟიმი იქნება გამოყენებული მხოლოდ ამ ფუნქციაში.

//ცვლადების გადაფარვა

var z = 89;
function displaySquare() {
    var z = 10;
    console.log(z); // 10
}
displaySquare(); // 10
//ამ შემთხვევაში ფუნქციის შიგნით ლოკალური ცვლადი გადაფარავს გლობალურს და ფუნქციის შიგნით გამოიყენებს ლოკალურ ცვლადს.


//თვითშესრულებადი ფუნქციები (IIFE)

(function() {
    console.log('hello world')
}())

(function(n){
    var result = 1
    for(i = 1; i <= n; i++)
    result *= i
    console.log(n + '_is faqtoriali aris' + result)
}(4))

// რეკურსიული ფუნქციები

function getFactorial(n){
    if (n === 1){
        return 1
    }else {
        return n * getFactorial (n - 1)
    }
}
var result = getFactorial(4)
console.log(result)

function getFibonachi(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    else {
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
var result = getFibonachi(8); //21
console.log(result); // 21

// ფუნქციის ხელახლა განსაზღვრა

function display(){
    console.log('dilamshvidobis')
    display = function(){
        console.log('dgemshvidobisa')
    }
}

display()
display()



function display(){
    console.log('dilamshvidobis')
    display = function(){
        console.log('dgemshvidobisa')
    }
}

var displayMessage = display

display()
display()
displayMessage()
displayMessage()


function display(){
    console.log('dilamshvidobis')
    display = function(){
        console.log('dgemshvidobisa')
    }
}
display()
display()

var displayMessage = display

displayMessage()
displayMessage()


//hoisting 

console.log(nina) //error


console.log(nina)
var nina = 21 // undefined


var c = a * b
var a = 5
var b = 10
console.log(c)// NaN



//hoisting in function
display()

function display(){
    console.log('hello hoisting')
}

// function განსაზღვრულია ცვლადით 

display()

var display = function (){
    console.log('hello hoisting')
}


// ობიექტები
// ობიექტის შექმნა

var user = new Object()
var user = {}

// ობიექტის თვისებები

var user = {}
user.name = 'nina'
user.age = 21

console.log(user.name)
console.log(user.age)

//object methods

var user = {}
user.name = 'nina'
user.age = 21
user.display = function(){
    console.log(user.name)
    console.log(user.age)
}
user.display() //method_ის გამოძახება

//მასივის სინტაქსი

var user = {}
user["name"] = "nina"
user["age"] = 21
user["display"] = function(){
    console.log(user.name)
    console.log(user.age)
}
user["display"]();

//ობიექტის შექმნის გამარტივებული სინტაქსი

var user = {
    name: 'nina',
    age: 21,
    display: function(){
        console.log(this.name)
        console.log(this.age)
    }
}
user.display()

var user = {
    "name": "nina",
    "age": 21,
    "display": function () {
        console.log(user.name);
        console.log(user.age);
    }
};

user.display();

// ორ სიტყვიანის დროს შეგვიძლია გამოვიყენოთ "" 
var user = {
    name: "nina",
    age: 21,
    "full name": "nina tsiklauri ",
    "display info": function () {
        console.log(user.name);
        console.log(user.age);
    }
};
console.log(user["full name"]);
user["display info"]();
//ოღონდ ასეთ შემთხვევაში თვისების ან მეთოდისადმი მიმართვისთვის უნდა გამოვიყენოთ მასივის სინტაქსი.


//თვისებების და მეთოდების წაშლა
// ობიექტის წაშლა 
var user = {}
user.name = 'dachi'
user.age = 16
user.display = function(){
    console.log(user.name)
    console.log(user.age)
}
console.log(user.name)
delete user.name
console.log(user.name)


//ერთი ობიექტი თვისების სახით შეიძლება შეიცავდეს სხვა ობიექტს.


var country = {
    name: 'germany',
    language: 'germanuli',
    capital: {
        name: "ბერლინი",
        population: 3375000,
        year: 1237,
    }
}

console.log(country.capital.name)
console.log(country['capital']['population'])
console.log(country.capital['year'])


// თვისებად ასევე შეიძლება მასივების გამოყენებაც, მათ შორის ობიექტების მასივებისაც:

var country = {
    name: "შვეიცარია",
    languages: ["გერმანული", "ფრანგული", "იტალიური"],
    capital: {
        name: "ბერნი",
        population: 126598
    },
    cities: [
        { name: "ციურიხი", population: 378884 },
        { name: "ჟენევა", population: 188634 },
        { name: "ბაზელი", population: 164937 }
    ]
}

for(i = 0; i < country.languages.length; i++)
console.log(country.languages[i])

for(i = 0; i < country.cities.length; i++)
console.log(country.cities[i].name)

//მეთოდებისა და თვისებების არსებობის შემოწმება და გადარჩევა

var user = {}
    user.name = 'nika',
    user.age = '15',
    user.display = function() {
        console.log(user.name)
        console.log(user.age)
    }

var hsdNameProp = 'name' in user
console.log(hsdNameProp) //true

var hsdlastnameProp = 'lastname' in user
console.log(hsdlastnameProp) //false

var hsdNameProp = user.name!==undefined
console.log(hsdNameProp) //true

var hsdlastnameProp = user.lastname!==undefined
console.log(hsdlastnameProp) // false


var hsdNameProp = user.hasOwnProperty('name')
console.log(hsdNameProp) //true

var hasDisplayProp = user.hasOwnProperty('display');
console.log(hasDisplayProp); // true

var hasWeightProp = user.hasOwnProperty('weight');
console.log(hasWeightProp); // false

//თვისებებისა და მეთოდების გადარჩევა

var user = {}
user.name = "Tom";
user.age = 26;
user.display = function () {
    console.log(user.name);
    console.log(user.age);
}
//გაცალკევება
for (var key in user){
    console.log(key + ':' + user[key])
}


//ობიექტები ფუნქციებში

function createUser (pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function(){
            console.log("სახელი: " + this.name + " ასაკი: " + this.age )
        }
    }
}

var tom = createUser('tom', 26)
tom.displayInfo()
var alice = createUser("Alice", 24);
alice.displayInfo();


//ასევე, ობიექტი შეიძლება იყოს პარამეტრად ფუნქციაში:

function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function () {
            console.log("სახელი: " + this.name + ", ასაკი: " + this.age );
        },
        driveCar: function(car){
            console.log(this.name + " ატარებს მანქანას მარკით " + car.name);
        }
    }
}

function createCar(mName, mAge){
    return {
        name: mName,
        age: mAge,
    }
}

var tom = createUser ('tom', 26) 
tom.displayInfo()
var bently = createCar ('bentli', 1995)
tom.driveCar(bently)


//ობიექტის ახალი ტიპები კონსტრუქტორის მეშვეობით.

var tom = new Object()

function User(pName, pAge) {
    this.name = pName,
    this.age = pAge,
    this.displayInfo = function(){
        console.log("სახელი: " + this.name + "; ასაკი: " + this.age)
    }
}

var tom = new User('tom', 23)
console.log(tom.name)
tom.displayInfo()




function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        document.write("მოდელი: " + this.name + "  გამოშვების წელი: " + this.year)
    }
}

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        console.log(this.name + " ატარებს მანქანას მარკით " + car.name)
    }
    this.displayInfo = function(){
        console.log("სახელი: " + this.name + "; ასაკი: " + this.age )
    }
}

var tom = new User("ტომი", 26);
tom.displayInfo();
var bently = new Car("ბენტლი", 2004);
tom.driveCar(bently);

//ობიექტების გაფართოება. Prototype

function User (pName, pAge) {
    this.name = pName,
    this.age = pAge,
    this.displayInfo = function() {
        console.log('saxeli:' + this.name + ' ' + 'asaki;' + this.age)
    }
}
User.prototype.hello = function(){
    console.log(this.name + 'ambobs:gamarjobas')
}
User.prototype.maxAge = 110

var tom = new User('nina', 21)
tom.hello()
var ani = new User('ani', 21)
ani.hello()
console.log(tom.maxAge)
console.log(ani.maxAge)


User.prototype.maxAge = 100
var nina = new User('nina', 21)
var ani = new User('ani', 21)
nina.maxAge = 50
console.log(nina.maxAge)
console.log(ani.maxAge)



//ინკაფსულაცია

function user (pName, pAge){
    this.name = pName,
    this.age = pAge,
    this.displayInfo = function(){
        console.log('სახელი:' + this.name + 'asaki:' + this.age)
    }
}

var nina = new user('nina', 14)
nina.name = 26
console.log(nina.name)



function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        console.log("სახელი: " + this.name + "; ასაკი: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            return _age = age;
        } else {
            console.log("არასწორი მნიშვნელობა");
        }
    }
}
 
var tom = new User("Том", 26);
console.log(tom._age); // undefined - _age - ლოკალური ცვლადი
console.log(tom.getAge()); // 26
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // არასწორი მნიშვნელობა


//ფუნქცია, როგორც ობიექტი. მეთოდები call და apply

var square = new Function('n', 'return n * n ')
console.log(square(5))


//პროტოტიპის მეშვეობით ჩვენ შეგვიძლია განვსაზღვროთ დამატებითი თვისებები:

function display(){
    console.log('hello nina')
}
Function.prototype.program = "hello"
console.log(display.program)

//მეთოდი call() იძახებს ფუნქციას მითითებული მნიშვნელობით this და პარამეტრებით:

function add(a,b){
    return a + b
}
var result = add.call(this,4,5)
console.log(result)

// პირველი პარამეტრის მეშვეობით ობიექტის გადაცემისას მასზე მიმართვა შეიძლება საკვანძო სიტყვის - this მეშვეობით:

function User(name,age){
    this.name = name
    this.age = age
}
var nina = new User('nina', 21)
function display(){
    console.log('misi saxelia' + this.name)
}
display.call(nina)

// თუ არა აქვს მნიშვნელობა ობიექტს, გადაეცემა null: 

function add(a,b){
    return a + b
}
var result = add.call(null,3,4)
console.log(result)


//apply

function add(x, y){   
    return x + y;
}
var result = add.apply(null, [3, 8]);
  
console.log(result); // 11

//მემკვიდრეობითობა

//მეთოდი Object.create() საშუალებას გვაძლევს შევქმნათ User-ის პროტოტიპის ობიექტი, რომელიც ენიჭება Employee-ს პროტოტიპს.
//მომხმარებლის კონსტრუქტორი
function User(name,age){
    this.name = name
    this.age = age
    this.go = function(){
        console.log(this.name + ' aris misi saxeli ')
    }
    this.displayInfo = function(){
        console.log("სახელი: " + this.name + "; ასაკი: " + this.age)
    }
}
User.prototype.maxAge = 110

//მომუშავის კონსტრუქტორი

function Employee(name, age, comp){
    User.call(this,name, age)
    this.company = comp
    this.displayInfo = function(){
        console.log("სახელი: " + this.name + "; ასაკი: " + this.age + "; კომპანია: " + this.company )
    }
}

Employee.prototype = Object.create(User.prototype)

var nina = new User('nina' , 21)
var ani = new Employee('ani' , 21, 'umushevari')
nina.go()
ani.go()
nina.displayInfo()
ani.displayInfo()
console.log(ani.maxAge)


//საკვანძო სიტყვა this

