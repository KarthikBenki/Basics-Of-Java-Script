// console.log("Arrays and Arrays methods")

//arrays is the easiest data structure in the world
//create some arrays
const numbers = [43,56,33,23,44,36,5]
const numbers2 = new Array(43,56,33,23,44,36,5)
const fruits = ["apple","Banana","Orange"]
const mixed = [43,"apple",null,true,{
    name: "apple"
}]

let val;

// to get array length
val = numbers.length
//check if its an array
val = Array.isArray(numbers)
//to get the single value
val = numbers[3]
val = numbers.indexOf(23)
//insert or replace 
numbers[2] = 100
//find the index
val  = numbers.indexOf(100)
//mutating the array
//Add a number to the end of an array
numbers.push(250)
//add a number to begining of the arrays
numbers.unshift(120)
numbers.pop()//remove last element of an array
numbers.shift()//remove from begining
//splicing
numbers.splice(1,2)
//reverse the array
numbers.reverse()
//concat the arrays
val = numbers.concat(numbers2)
//sorting of an array
val  = fruits.sort()
val = numbers.sort()
//sorting of a number
val = numbers.sort(function(x,y){
    return x-y;
})

val = numbers.sort(function(x,y){
    return y-x;
})
console.log(numbers)
console.log(val)