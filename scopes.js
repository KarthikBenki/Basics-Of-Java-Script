// console.log("Scopes")
//scopes
// local scope related to block
//global scope belongs ro every one
// {
//     const message = "hi";
//     console.log(message);
// }
const colour = "blue";
function abc() {
    const message = "hi";
    console.log(colour);
}

function pqr() {
    const message = "hi";
    console.log(message);
}
// console.log(message)
abc()
pqr()

// if(true){
//     const another  = "Bye"
//     console.log(another)
// }
// console.log(another)
// for(let i = 0;i<10;i++){
//     console.log(i)
// }
// console.log(i)


{
    const colour = "red"
    console.log(colour)//local variable is having higher precidence
}


