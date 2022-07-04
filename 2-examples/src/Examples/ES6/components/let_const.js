import React from 'react'
//ES6
//block scope

function es6() {
    const NUMBER_DEFAULT = 100;
    for (let index = 0; index < 10; index++) {
        console.log(index);
    }
    NUMBER_DEFAULT = 10;
    
    console.log(NUMBER_DEFAULT);
}

//ES5
var firstName = "Archie" // glocal scope
// functional scope
function getName(){
    var lastName = 'Pham'
    return firstName + " " + lastName;
}

function LetConst() {
  return (
    <div>{es6()}</div>
  )
}

export default LetConst