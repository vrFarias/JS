// Manipulando Arrays

let techs = ["HTML", "CSS", "JavaScript"]

// adicionar um item no fim
techs.push("Node.JS")

// adicionar no começo
techs.unshift("SQL")

// remover do fim
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do Array
console.log(techs.slice(1, 2))

// remover 1 ou mais itens em qualquer posição do Array
techs.splice(1, 1)

// encontrar a posição de um elemento no Array
let index = techs.indexOf("JavaScript")

console.log(index)