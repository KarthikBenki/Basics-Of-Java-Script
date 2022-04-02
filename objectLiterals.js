// console.log("Object Literals")
// const person = {
//     firstName: 'John',
//     age: 27,
//     email:"karthik@gmail.com",
//     hobbies:["eat","sleep","code"],
//     address:{
//         city:"Mangalore",
//         state:"Karnataka"
//     },
//     getBirthYear:function(){
//         return 2022 - this.age;
//     }
// }


// let val  = person;

// console.log(val.getBirthYear())

//array of objects
const people = [
{
    firstName : "Mani",
    age:25
},
{
    firstName : "Gaurav",
    age:27
},
{
    firstName : "Rakesh",
    age:28
}
]

console.log(people[1].firstName)
for(let i of people) {
    console.log(i.firstName)
}

for(let i = 0;i<people.length;i++) {
    console.log(people[i].firstName)
}