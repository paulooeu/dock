<h3 align="center">
  Prova Dock
</h3>

<p align="center">Sistema de transação com deposito, saque e estrato </p>

## 🚀 Tecnologias

- Express — A web framework for Node.js
- postgree - Banco de dados relacional ( ate o momento, deve ser alterado)
- sequelize - ORM baseado em promessas
- yup - Validação
- Jest - Testes
- sqlite - Banco de dados para testes

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) OU [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker](https://www.docker.com/) `Criar banco postgree`

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Rode `yarn ou npm install` para instalar as dependências;
3. Crie um docker com banco de dado postgree conforme as informações do `.env`;
4. Rode `yarn dev` para iniciar o servidor.
5. Rode `yarn sequelize db:migrate` para criação as tabelas

# Insominia

Aperte aqui para importar o template no insominia ou utilize o Insomnia_2020-10-15.json que se encontra no projeto

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Dock&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fpaulooeu%2Fdock%2Fmain%2FInsomnia_2020-10-15.json%3Ftoken%3DAEELPV2ZYZ2A3DXQLL2GISC7Q7P7K)
