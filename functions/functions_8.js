/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + ' está andando'
    }
}

const vinicius = new Person('Vinicius')
const joao = new Person('João')

console.log(vinicius.walk())
console.log(joao)