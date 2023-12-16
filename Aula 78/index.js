// Factory Functions + Prototypes

const falar = {
  falar() {console.log(`${this.nome} está falando`)},
}

const comer = {
  comer() {
    console.log(`${this.nome} está comendo`);
  },
}

const beber = {
  beber() {
  console.log(`${this.nome} está bebendo`);
  },
}

// const pessoaPrototype = { ...falar, ...comer, ...beber }
// ou
const pessoaPrototype = Object.assign({}, falar, comer, beber) //Tudo isso, acima até aqui é conhecida na programação como composição / mixing.

function criaPessoa(nome, sobrenome) {
  // const pessoaPrototype = {
  //   falar() {
  //     console.log(`${this.nome} está falando`);
  //   },
  //   comer() {
  //     console.log(`${this.nome} está comendo`);
  //   },
  //   beber() {
  //     console.log(`${this.nome} está bebendo`);
  //   }
  // }
  
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome},
  }); // tem a vantagem de configurar
}

const p1 = criaPessoa('Jef', 'Santos')
const p2 = criaPessoa('Rafael', 'Macedo')
p2.beber();
