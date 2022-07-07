// alert('Hey Buddy');

// variables = var

var a = 1;
var b = 2;
var result = a + b
console.log(result)
3

var a = "Anubhav"
console.log(a)

document.getElementById('me').innerHTML='Namaste';

// prompt('what is your age');
// var age = prompt
// console.log(age);

// document.getElementById('me').innerHTML= age;

// Numbers
var a = 1
var b = 2

a+b
3
var a = 1
var b = 2
a-b
-1
var a = 1
var b = 2
b-a
1
var a = 1
var b = 2
b/a
2
var a = 1
var b = 2
b*a
2

var n1 = 10
var n2 = 20

n1 = n1+1
11
n2 = n2+1
21
n1
11
n1 = n1-1
10
n1
10
n1++

n1
11
n1++
11
n1--
12
n1
11
n1--
11
n1
10

// FUNCTION
/* Create A Function
    Call A Function */

// function fun(){
//     alert('Hey! I am a Function');
// }

// fun();

// function wish(){
//     prompt("What is your Name?");
// }
// wish()

    // var name = prompt("What is your Name?");
    // var result="Hello " + name;
    // var result="Hello" + "" + name; //String Concatenation
    // console.log(result)


// Arguements in a Function

function add(n1, n2){
    let result= n1 + n2;
    console.log(result)
}

add(10, 10);
20

// Loops
/*  1. While Loop
    2. For Loop */

/* While Loop*/
let num = 0
while (false){
    num += 1;
    console.log(num);
}

/* For Loop */
for (let num = 0; num <= 1; num++){
    console.log(num);
}

// DATATYPES
/* 
let name = "Anubhav" //String
let mob = 748685 // Number
let obj = {firstname: "Anubhav", lastname:"Mohandas"}; //OBJECT
true = false // Boolean
let languages = ['HTML', 'Python', 'C', 'C#', 'JS'] //Array
let random; //undefined
let empty = null
*/

// Strings
// let name='Anubhav \nMohandas' //New Line
let name="Anubhav";
console.log(name.replace("Anubhav", "Sreehari"))

//Array
let mob = ['1+', 'realme', 'Apple','samsung']

// Object
let obj = {firstname: "Anubhav", lastname:"Mohandas", age:20};
console.log(obj.firstname)
// Anubhav
console.log(obj.lastname)
// Mohandas

// obj.firstname = 'sreehari'
// 'sreehari'
// console.log(obj.firstname)
// sreehari

/* Conditional Statements */
// IF - ELSE Statement
// Switch

// IF - ELSE Statement
// && - AND, || - OR
var age = 45 //prompt("What is your age?");

if ((age >= 15) && (age <= 35)) {
    status = "Yes You are";
    console.log(status)
} else {
    status = "No you are not";
    console.log(status)
}

// SWITCH STATEMENTS

switch (2){
    case 0 :
        text = "Weekend"
        break;
    case 5 : 
        text = "Weekend"
        break;
    case 6 :
        text = "Weekend"
        break;
    
    default:
        text = "Weekday"
}
console.log(text)