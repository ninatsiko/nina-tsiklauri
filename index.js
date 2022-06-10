//task 1
let x = 28;
let y = 21;
let k = ('ანა ლევანიზე 7 წლით უფროსია');
let z=x-y;
console.log(z);
console.log(k);

//task 2

let StudentsNames = ['John', 'Sam', 'Ann', 'Will', 'Andrew', 'joseph', 'Lorelai', 'Amelie', 'Den'];
let MiddleNumber = ((StudentsNames.length - 1) / 2);
let MiddleName = (StudentsNames[MiddleNumber]);
console.log(MiddleName);

//task 3  
//part 1

var student = {
    firstName : 'Nina',
    lastName : 'tsiklauri',
    age : 21,
    subjects : ['math', 'javascript', 'history', 'english', 'economy'],
    roommate : {
        fullName : 'ani devdariani',
        age : 21,
    }
}
//part 2 
for (let element of student.subjects){
    console.log (element)
}

student.fullName = student.firstName + ' ' + student.lastName;
console.log (student.fullName)

student.fullName = 'nina tsiklauri';
console.log(student.fullName);

var result = student.fullName + ' ' + 'is' + ' ' + student.age + ' ' + 'years old' + ' ' + 'and her roommate is' + ' ' + student.roommate.fullName;
console.log(result);

//task 4 

let fruitArr = ['banana', 'orange', 'apple', 'mango', 2, 12 ]