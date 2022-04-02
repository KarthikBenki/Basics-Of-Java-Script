// console.log("function Declaration and Expression")

//function declaration and expression
//what is a function

//how to declare a function
// function greet(){
//     console.log("Hai am a function")
// }

// function getBirthYear(){
//     return 1995
// }
// // greet();//we can call this n number of times

// console.log(getBirthYear());


// function greet(firstName="Gaurav"){
//     return `Hello ${firstName}`
// }

// console.log(greet("Karthik"))

//function expression

// const mul = function(a,b){
//     return a*b
// }

// console.log(mul(10,20))

//IIFE - Immediately invokable function Expression
(function(){
    console.log("IIFE ran ...")
})();

(function(name){
    console.log(name)
})("Karthik");

const person = {
    getBirthYear: function(){
        return 1995
    }
}

const person1 = {
    getBirthYear: function(day){
        return `march ${day}`
    }
}

console.log(person1.getBirthYear(30));