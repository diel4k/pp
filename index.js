"use strict";
function calculator () {
let k1 = prompt ("яку дію хочете зробити?","");
let x = prompt("число х","");
let y = prompt("число y","");
if (k1 == "ніга"){
    alert("ніга ван ніга ту ніга фру ніша фор")
}
if (k1 == "+"){
    alert(`результ  = ${+x + +y}`)
}
if (k1 == "-"){
    alert(`результ  = ${x - y}`)
}
if (k1 == "*"){
    alert(`результ  = ${x * y}`)
}
if (k1 == "/"){
    alert(`результ  = ${x / y}`)
}

}

document.getElementById('button').onclick = calculator
document.getElementById('button1').onclick = calculator
