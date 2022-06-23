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

let fruitsArr = ['banana', 'orange', 'apple', 'mango', 2, 12 ];
let i = 0;

while(typeof fruitsArr[i] == 'string') {
    console.log(fruitsArr[i]);
    i++;
}

// task5

let numArr = [12, 23,43,11, 9,2,121,90];

for( let i = 0; i < numArr.length;i++){
    let element = numArr[i];
    if(element > 31 && element%2 == 0){
        console.log('metia luwia');
    }
    else if (element < 31 && element%2 == 1){
        console.log('naklebia 31 da kenti')
    }
}