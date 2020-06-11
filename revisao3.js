//ES8: Object.values / Object.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))


//melhorias na notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'oi gente'
    }
}

console.log(pessoa.nome, pessoa.ola());

//class
class Animal{}
class Carrocho extends Animal{
    falar(){
        return 'Au au'
    }
}

console.log(new Carrocho().falar())