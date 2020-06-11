//não aceita repetição/não indexado
const times = new Set()
times.add('vasco')
times.add('são paulo').add('Palmeiras').add('corinthians')
times.add('flamento')
times.add('vasco')

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('flamengo')

const nomes = ['raquel', 'lucas', 'julia', 'lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet);

