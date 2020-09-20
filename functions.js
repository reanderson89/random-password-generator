
var functionArray = {
    addUpper: function() {
        return String.fromCharCode(Math.floor(Math.random()*26) + 65); 
    },
    addLower: function() {
        return String.fromCharCode(Math.floor(Math.random()*26) + 97);  
    },
    addNumber: function() {
        return String.fromCharCode(Math.floor(Math.random()*10) + 48); 
    },
    addSpecial: function() {
        return String.fromCharCode(Math.floor(Math.random()*4) + 35);  
    }
}

// function addUpper() {
//     return String.fromCharCode(Math.floor(Math.random()*26) + 65);
// }

// function addLower() {
//     return String.fromCharCode(Math.floor(Math.random()*26) + 97);
// }

// function addNumber() {
//     return String.fromCharCode(Math.floor(Math.random()*10) + 48);
// }

// function addSpecial() {
//     return String.fromCharCode(Math.floor(Math.random()*4) + 35);
// }

console.log(functionArray.addUpper())
// console.log(addLower());
// console.log(addNumber());
// console.log(addSpecial());