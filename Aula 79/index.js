// Objeto Map() - estrutura de dados

const pessoas = [
  { id: 3, nome: 'Luiz'},
  { id: 2, nome: 'Jef'},
  { id: 1, nome: 'Rafa'}
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const {id} = pessoa;
//   novasPessoas[id] =  {...pessoa};
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const {id} = pessoa;
  novasPessoas.set(id,  {...pessoa});
}

for (const pessoa of novasPessoas) {
  console.log(pessoa);
}

for (const [identifier, {id, nome}] of novasPessoas) {
  console.log(identifier, id, nome);
}

for (const pessoa of novasPessoas.values() /*ou .keys() */) {
  console.log(pessoa);
}

//  console.log(novasPessoas.get(2));