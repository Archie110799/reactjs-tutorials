import React from 'react'

//Property Shorthand
//Method property
// Compoted Property Key

function personEs6(name, age){
    const salary = 'Salary'
    return {
        name,
        age,
        getName(){
            return `${this.name}  ${this.age}`
        },
        [`${salary}OfDavid`] : 20000
    }
}

function person(name, age){
    return {
        name: name,
        age: age,
        getName: function(){
            return this.name + ' ' + this.age
        }
    }
}
var salary = 'salary'
person[salary + 'OfArchie'] = 20000;

function EOP() {
  return (
    <div>ehanced_object_property</div>
  )
}

export default EOP