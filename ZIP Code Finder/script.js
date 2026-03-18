/*--- CAPTAÇÃO DE CAMPOS ---*/
const logradouro = document.getElementById("logradouro");
const cidade = document.getElementById("cidade");
const bairro = document.getElementById("bairro");
const estado = document.getElementById("estado");
const numero = document.getElementById("numero");

//audio de click do botão
const somClick = new Audio("./sounds/button-click-sound.mp3");

/*--- BUSCANDO DADOS DA API ---*/

const buscarEndereco = () => {
  let cep = document.getElementById("cep").value;

  //validação simples
  if (cep === "" || cep.length < 8) {
    window.alert("Cep inválido ou vazio!");
  } else {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      //transforma em objeto
      .then((resposta) => resposta.json())

      // entrega os dados da API
      .then((dados) => {
        if (dados.erro) {
          alert("CEP não encontrado.");
          return;
        }

        logradouro.value = dados.logradouro;
        cidade.value = dados.localidade;
        bairro.value = dados.bairro;
        estado.value = dados.estado;
        console.log(dados);
      })

      //tratamendo de possíveis erros

      .catch((erro) => {
        console.log("Erro ao buscar CEP:", erro);
        alert("Não foi possível buscar o CEP.");
      });
  }
};

// evento que chama a função após perder o foco do input
cep.addEventListener("blur", () => {
  buscarEndereco(cep);
});

/*---- SALVAR NO LOCALSTORAGE ----*/

const salvarEndereco = (event) => {
  somClick.play();
  event.preventDefault(); // evita recarregamento da página

  //objeto que acessa o formulário
  const formularioValores = {
    cep: cep.value,
    logradouro: logradouro.value,
    cidade: cidade.value,
    bairro: bairro.value,
    estado: estado.value,
    numero: numero.value,
  };
  //converte objeto para string
  const formulario = JSON.stringify(formularioValores);

  //novo objeto que deixa numero fora da validaçãa
  const formularioValidacao = {
    cep: cep.value,
    logradouro: logradouro.value,
    cidade: cidade.value,
    bairro: bairro.value,
    estado: estado.value,
  };

  //retorna todos os valores de um objeto
  const valores = Object.values(formularioValidacao);

  //verifica se campos estão vazios antes de salvar
  const existeCampoVazio = valores.some((campo) => campo.trim() === "");

  if (existeCampoVazio) {
    alert("Campos vazios, preencha-os para salvar.");
  } else {
    // Salva dados formulario
    localStorage.setItem("formulario", formulario);
    alert("Endereço Salvo.")
  }
};

/*--- RECUPERAR DADOS DO LOCALSTORAGE ---*/

const recuperarDados = () => {
  //recupera dados salvos
  const dadosSalvos = localStorage.getItem("formulario");

  //verifica se existe dados salvo no localStorage
  if (dadosSalvos) {
    //converte string -> objeto
    const dadosConvertidos = JSON.parse(dadosSalvos);

    // preenche os inputs
    cep.value = dadosConvertidos.cep;
    logradouro.value = dadosConvertidos.logradouro;
    cidade.value = dadosConvertidos.cidade;
    bairro.value = dadosConvertidos.bairro;
    estado.value = dadosConvertidos.estado;
    numero.value = dadosConvertidos.numero;
  }
};

//Salva campos preenchidos
const btnSalvar = document.querySelector(".btnSalvar");
btnSalvar.addEventListener("click", salvarEndereco);

// chama função para recuperar os dados anteriormente preenchidos
document.addEventListener("DOMContentLoaded", () => {
  recuperarDados();
});

/*--- LIMPAR FORMULÁRIO ---*/

const limparFormulario = () => {
  somClick.play();

  //limpar campos
  cep.value = "";
  logradouro.value = "";
  cidade.value = "";
  bairro.value = "";
  estado.value = "";
  numero.value = "";

  //limpar localStorage
  localStorage.removeItem("formulario");
};

const btnApagar = document.querySelector(".btnApagar");
btnApagar.addEventListener("click", limparFormulario);
