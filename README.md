<h3 align="center">
  Prova Dock
</h3>

<p align="center">Sistema de transação com deposito, saque e estrato </p>

## 🚀 Tecnologias

- Express — A web framework for Node.js
- Sentry - Controle de erros
- Mongo - Banco de dados não relacional
- postgree - Banco de dados relacional ( ate o momento, deve ser alterado)
- sequelize - ORM baseado em promessas
- yup - Validação

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) OU [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/) `Criar banco postgree e mongo`

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Rode `yarn` para instalar as dependências;
3. Crie um docker com banco de dado postgree e mongo conforme as informações do `.env`;
4. Rode `yarn dev` para iniciar o servidor.
5. Rode `yarn sequelize db:migrate` para criação as tabelas
