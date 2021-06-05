// Variáveis e tipos de dados
// declaração ou declaration
var myName

// assignment ou atribuição de valores
myName = "Vinicius"

// que tipo de dado foi colocado na variável
// console.log(typeof name)

// agrupamento de declarações
let myAge, isHuman

myAge = 24
isHuman = true

// múltiplos argumentos na função
// console.log(name, age, isHuman)

// escrita de texto + variáveis

// concatenando valores
console.log("o " + myName + " tem " + myAge + " anos")

// interpolação de valores com template literals ou template strings
console.log(`o ${myName} tem ${myAge} anos`)

// Object -----------------------//

const person = {
    // name: "Vinicius",
    // age: 24,
    // weight: 64.5,
    // isAdmin: true
}

// console.log(person.age)

console.log(`${person.name} tem ${person.age} anos`)

// Array ------------------------//

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        // age: 3
    }
]

// como acessar valores dentro de um Array
console.log(animals[0])
console.log(animals[2].name)

// como saber o total de elementos no Array
console.log(animals.length)