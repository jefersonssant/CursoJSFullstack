// Métodos de instância e estáticos

// estáticos -> métodos que você pode acessar na classe sem instanciar a classe, sem utilizar a palavrinha new, e não vão estar disponível dentro da instância, não consegue acessar outros dados da classe.

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentaVolume() {
    this.volume += 2;
  }
  
  diminuirVolume() {
    this.volume -= 2;
  }

// Método estático
  static /*mudou o método*/trocaPilha() {
    console.log('Ok, vou trocar.');
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.aumentaVolume();
ControleRemoto.trocaPilha();
console.log(controle1);