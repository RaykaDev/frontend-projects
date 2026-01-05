let recebeValor = document.getElementById("recebeValor"); //valor inserido
let tempo = document.getElementById("tempo");
let troco = document.getElementById("troco");

//tabela de Preços
const valores = {
  1.0: 30,
  1.75: 60,
  3.0: 120,
};
// transforma o objeto em lista
const listaValores = Object.entries(valores);

class Parquimetro {
  constructor(
    recebeValor,
    tabelaPrecos,
    tempo,
    troco,
    valorMaximo = 3.0,
    minutos = null,
    trocoFinal = 0,
    preco = 0
  ) {
    this.recebeValor = recebeValor;
    this.tabelaPrecos = tabelaPrecos;
    this.tempo = tempo;
    this.troco = troco;
    this.valorMaximo = valorMaximo;
    this.trocoFinal = trocoFinal;
    this.minutos = minutos;
    this.preco = preco;
  }

  calcularTempo() {
    // procura na lista de valores o preço que corresponde ao valor inserido
    const resultado = listaValores.find(
      ([preco, minutos]) => this.recebeValor === Number(preco)
    );
    // se encontrou, guarda o preço e os minutos correspondentes
    if (resultado) {
      [this.preco, this.minutos] = resultado;
    } else if (this.recebeValor < 1.0) {
      // valor menor que o mínimo → insuficiente
      this.minutos = null;
    } else {
      // valor acima da tabela → aplica tempo máximo
      this.minutos = 120;
    }
  }

  calcularTroco() {
    // pega o último preço da tabela (valor máximo permitido)
    this.valorMaximo = Number(listaValores[listaValores.length - 1][0]);
    // se o valor inserido for maior que o máximo, calcula o troco
    if (this.recebeValor > this.valorMaximo) {
      this.trocoFinal = this.recebeValor - this.valorMaximo;
    } else {
      // caso contrário, não há troco
      this.trocoFinal = 0;
    }
  }

  exibirResultado() {
    //mostra tempo e troco ou mensagem de erro
    if (this.minutos === null) {
      alert("Valor insuficiente!");
      tempo.textContent = "";
      troco.textContent = "";
      return;
    }
    tempo.textContent = `Tempo: ${this.minutos} minutos`;
    troco.textContent = `Troco: R$ ${this.trocoFinal.toFixed(2)}`;
  }

  limparResultado() {
    document.getElementById("limpar").addEventListener("click", () => {
      document.getElementById("recebeValor").value = "";
      document.getElementById("tempo").innerText = "";
      document.getElementById("troco").innerText = "";
    });
  }
}
const infoParquimetro = new Parquimetro();
const botao = document.getElementById("botaoCalc");

botao.addEventListener("click", () => {
  infoParquimetro.recebeValor = Number(recebeValor.value); //pega valor digitado

  infoParquimetro.calcularTempo();
  infoParquimetro.calcularTroco();
  infoParquimetro.exibirResultado();
  infoParquimetro.limparResultado();
});
