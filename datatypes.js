//Datatypes and JavaScript

//Two types of datatypes
/* primitive datatypes 
stored directly in the location the variable access
stored in stacked 

String
Number
Boolean
Null
Undefined
Symbol

Reference datatypes
accessed by reference 
stored in heap ,and points to the location in memory

Arrays,
Object Literals,
Functions
*/

//primitive datatypes
// const name = "Karthik Benki"
// console.log(typeof name)
// const number = 12345.566;
// console.log(typeof number)
// const isTrue = true;
// console.log(typeof isTrue)
// const isNull = null;//we are storing a value of nothing
// console.log(typeof isNull)
// let isUndefined;//if 
// console.log(typeof isUndefined)
// const sym = Symbol()
// console.log(typeof sym)

//reference datatypes
//Array
const hobby = new Array("Movies","Cricket");
//Object litersls
const person = {
    name:"Karthik",
    email:"karthik@gmail.com"
}
//function
let addition = function(a,b){
    return a +b;
}

//Dates
const today = new Date();
console.log(today)
console.log(typeof today)

