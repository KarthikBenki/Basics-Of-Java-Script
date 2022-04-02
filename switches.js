// console.log("switches")
//switches

// const color = prompt();
// switch (color) {
//     case "red":
//         console.log("color is red")
//         break;

//     case "yellow":
//         console.log("color is yellow")
//         break;

//     case "blue":
//         console.log("color is blue")
//         break;

//     default:
//         console.log("choose corect colour")


// }

const dayOfWeek = new Date().getDay()
// console.log(dayOfWeek)

switch(dayOfWeek){
    case 0:
        console.log("Sunday")
        break;
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    default:
        console.log("Enter correct day")
    
}
