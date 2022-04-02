// console.log("Template Literals")
//template literal is ES6 feature
const name = "Mani"
const age = 26;
const job = "Web Devoloper"
const city = "Challakere"

let html;
//without using template literals ES5, We are going to render
//HTML to browser with js

// html = '<ul><li>Name:' + name +
//     '</li><li>Age:' + age +
//     '</li><li>Job:' + job +
//     '</li><li>City:' + city + '</li><ul>'

// document.body.innerHTML = html;

function hello(){
    return 'hello Micro Degree';
}
person = {
   name: 'John',
   age: 34,
   email:"test@test.com" 
}

//with using Template literals
html = `
<ul>
<li>Name:${name}</li>
<li>Age:${age}</li>
<li>Job:${job}</li>
<li>City:${city}</li>
<li>Function:${hello()}</li>
<li>Person:${person.name}</li>
</ul>
`;
document.body.innerHTML = html;
