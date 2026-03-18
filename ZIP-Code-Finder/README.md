# Projeto: Cadastro de Endereço com CEP

Este é um pequeno projeto prático desenvolvido como parte dos estudos da linguagem **JavaScript**, com foco nos conceitos de:

- Consumo de API com `fetch()`
- Manipulação do DOM
- Validação de dados
- Armazenamento local com `localStorage`

## 📋 Funcionalidade

O projeto simula um **formulário de cadastro de endereço**, onde o usuário digita o **CEP** e, automaticamente, os demais campos como **logradouro, bairro, cidade e estado** são preenchidos com os dados da API ViaCEP.

### 🛠️ Recursos:

- Autopreenchimento dos campos de endereço ao digitar o CEP.
- Validação de CEP inválido ou com menos de 8 dígitos.
- Exibição de aviso ao usuário em caso de erro.
- Os dados preenchidos são armazenados no navegador utilizando o `localStorage`, mesmo após atualizar a página.
- Botão de limpar formulário, caso o usuário deseje.

## 💻 Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API ViaCEP

## 📁 Estrutura

/cadastro CEP
├── index.html
├── style.css
├── script.js
├── ico.png
└── README.md

## 📌 Observações

- Este projeto **não possui botão de cadastro**, pois o foco é exclusivamente demonstrar a lógica de integração com API e persistência de dados localmente.

## 🚀 Como executar

1. Clone este repositório:
```bash
git clone https://github.com/Raylunaris/EBAC-Projetos-Exerc-cios