console.log("let vs var difference")
//var vs let

function start() {
    for (let i = 0; i < 5; i++) {
        if(true){
            const colour = "red";
            console.log(colour)
        }
        console.log(colour)
    }  
}
// start()

var Attr  = 25;//its appends to window object
//and over rides the existing object
let age1 = 27;//will not append


