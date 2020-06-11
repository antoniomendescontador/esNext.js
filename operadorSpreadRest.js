//operador...rest(juntar)/spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 400000 }
const clone = {ativo: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['joao','pedro','gloria']
const grupoFinal = ['maria', ...grupoA]
console.log(grupoFinal);
