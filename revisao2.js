//arrow function
const soma = (a, b=0) => a + b
console.log(soma(1));

//arrow function (this)
const lexico1 = ()=> console.log(this === exports);
lexico1()

//parametro default 
function log(texto = 'Node') {
    console.log(texto);
}
log()
log('Sou mais forte')

//operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3))