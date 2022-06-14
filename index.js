// task 1 

let sampleObject = {
    isItarable : true,
    sampleArray : [12,63,21,34,98,57]
}

function myFunction (object){
    if(object.isItarable == 1){
        for (i = 0; i < object.sampleArray.length; i++)
        console.log(object.sampleArray[i])
    }
    else {
        console.log('provided array is not itarable')
    }

}
myFunction(sampleObject); 

//task 2

function checkPythagoras (x,y,z){
    switch(true){
        case (x**2 + y**2 == z**2):
            return true;
        case (x**2 + z**2 == y**2):
            return true;
        case (y**2 + z**2 == x**2):
            return true;
        default:
            return false;
    }
}
let result = checkPythagoras(3,4,5)

console.log(result);

//task 3 

let minMaxArray = [2,14,25,75,11,6]
function minMax (array){
    let max = array [0];
    let min = array [0];
    for(i = 0; i <array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    for(i = 0; i <array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return (`min value is ${min} and max value is ${max}`);

}
let result2 = minMax(minMaxArray);
console.log(result2);

//task 4

function angleCounter (angles) 
{
    
    
    switch (true) 
    {
     
       case (angles >= 0 && angles < 90) : 
            console.log(`Acute angle: An angle between 0 and 90 degrees.`);
            break ;

       case (angles == 90) : 
            console.log(`Right angle: An 90 degree angle.`);
            break ;
         
       case (angles > 90 && angles < 180 ) :
            console.log(`Obtuse angle: An angle between 90 and 180 degrees.`);
            break ;

       case (angles == 180) :
            console.log(`Straight angle: A 180 degree angle.`);
            break ;

        default :
            console.log(`More Than 180 `);
            break;
    }
}

angleCounter (205);


//task 5


