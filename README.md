# 📮 ZIP Code Finder

Aplicação que consome a API do ViaCEP para buscar um CEP informado pelo usuário e preencher automaticamente os campos de endereço.

O projeto também utiliza LocalStorage para persistência de dados, permitindo que as informações sejam salvas e recuperadas mesmo após o recarregamento da página, além de incluir validações de entrada e tratamento de erros na requisição.


## 🖼️ Preview do Projeto
<p align="center">
  <a href="#">
    <img src="https://github.com/user-attachments/assets/60dd002d-b010-4dab-b650-39c32a80e9b7" width="600">
  </a>
</p>

---

## ✨ Funcionalidades
- 🔎 **Busca de CEP em tempo real** (evento blur)  
-  **Preenchimento automático de endereço**:  
    `Logradouro, Bairro, Cidade e Estado`  
- 💾 **Armazenamento dos dados com LocalStorage**  
- 🔄 **Recuperação automática dos dados ao recarregar a página**  
- 🧹 **Limpeza dos dados salvos**  
- 🔊 **Feedback sonoro ao clicar nos botões**  
- ✅ **Validação de campos antes de salvar**

---

## 🛠️ Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)  ![Fetch API](https://img.shields.io/badge/Fetch%20API-000000?logo=javascript&logoColor=white)  ![LocalStorage](https://img.shields.io/badge/LocalStorage-4CAF50?logo=google-chrome&logoColor=white)  ![ViaCEP](https://img.shields.io/badge/ViaCEP-007ACC?logo=azure-devops&logoColor=white)

---

## ▶️ Como Rodar o Projeto

Clone este repositório:

```bash
git clone https://github.com/ItsRAYKA/frontend-projects.git
```

Navegue até a pasta do projeto:

```bash
cd frontend-projects/ZIP-Code-Finder
```
Abra o arquivo index.html no navegador.

---

## ✒️ Aprendizados

- Manipulação do **DOM**  
- Eventos (**click**, **blur**, **DOMContentLoaded**)  
- Consumo de API com **Fetch API**  
- Tratamento de erros (**catch**)  
- Validação de dados de entrada  
- Uso de **LocalStorage**  
- Conversão de dados com **JSON.stringify** e **JSON.parse**  
- Organização de lógica em funções  
