let eu = {
   nome: 'Lucas',
   sobrenome: 'Zluhan',
   listaCompras: ['ovo', 'cebola', 'chocolate', 'pepino'],
   listaConsole: function () {
      console.log(`Olá ${this.nome} ${this.sobrenome}, sua lista de compras é:`);
      for (let i = 0; i < this.listaCompras.length; i++) console.log(` ${i + 1} - ${this.listaCompras[i]}`);
   },
};

eu.listaConsole();
