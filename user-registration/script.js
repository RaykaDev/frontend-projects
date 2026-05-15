const btnAdd = document.querySelector(".btnAdd");

const url =
  "https://69d01f0790cd06523d5d0c61.mockapi.io/userCadastrado/cadastrados";

const enviarDados = (event) => {
  // evita recarregamento da página
  event.preventDefault();

  // CAPTAÇÃO DE CAMPOS
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  // OBJETO COM OS DADOS DO USUÁRIO
  const dadosUser = {
    nome: nome,
    email: email,
  };
  /*---REQUISIÇÃO DOS DADOS---*/

  // BUSCAR USUÁRIOS JÁ EXISTENTES (GET)
  fetch(url)
    .then((response) => response.json()) // converte resposta em JSON (array de usuários)
    .then((lista) => {
      // VERIFICAR SE JÁ EXISTE UM USUÁRIO COM O MESMO EMAIL
      const existe = lista.some(
        (user) => user.email.toLowerCase() === email.toLowerCase(),
      );

      // se já existir, interrompe o fluxo
      if (existe) {
        alert("Usuário já cadastrado");
        return; // impede execução do POST
      }

      /*---ENVIAR DADOS---*/

      //  SE NÃO EXISTIR, REALIZA O POST (ENVIA OS DADOS)
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosUser),
      });
    })
    .then((response) => {
      // esse bloco só executa se o POST ocorreu
      if (response) {
        return response.json(); // converte resposta do POST
      }
    })
    .then(() => {
      // atualiza a lista na tela após salvar
      listarDados();
    })
    .catch((error) => {
      // trata erros tanto do GET quanto do POST
      console.log("Erro:", error);
    });
};

/*---RECUPERAR DADOS---*/

const listarDados = () => {
  const cadastros = document.querySelector(".cadastros");

  fetch(url)
    .then((response) => response.json())

    .then((dado) => {
      //limpar cadastros
      cadastros.innerHTML = "";
      //percorrer cada usuário
      dado.forEach((usuario) => {
        //criar usuário no HTML
        const itemCadastros = document.createElement("li");
        itemCadastros.innerHTML = `${usuario.nome} - ${usuario.email} `;
        cadastros.appendChild(itemCadastros);

        //criar botão deletar
        const btnDelete = document.createElement("button");
        btnDelete.innerHTML = "Deletar";
        btnDelete.classList.add("btnDelete");
        itemCadastros.appendChild(btnDelete);
        //só deleletar usuário aao evento do click
        btnDelete.addEventListener("click", () => {
          deletarDados(usuario.id);
        });
      });
    })
    .catch((error) => console.log("Erro:", error));
};

/*---DELETAR DADOS---*/

const deletarDados = (id) => {
  // faz requisição DELETE passando o id da URL
  fetch(`${url}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json()) // resposta da API
    .then(() => {
      // atualiza a lista após deletar
      listarDados();
    })
    .catch((error) => {
      console.log("Erro ao deletar:", error);
    });
};

btnAdd.addEventListener("click", enviarDados);

//LISTAR DADOS
document.addEventListener("DOMContentLoaded", () => {
  listarDados();
});
