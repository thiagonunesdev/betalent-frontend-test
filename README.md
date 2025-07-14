# BeTalent Frontend Test

Projeto desenvolvido como teste técnico para a empresa BeTalent. A aplicação consiste em um frontend construído com React 19 e Vite, simulando consumo de uma API fake com JSON Server. O projeto inclui também boas práticas de código, testes automatizados e ferramentas de lint e formatação.

---

## Sobre o Projeto

Este projeto tem como objetivo demonstrar habilidades práticas em:

- **React 19** com Vite para um desenvolvimento rápido e otimizado.
- **React Query (@tanstack/react-query)** para gerenciamento de estado de requisições.
- **Styled-components** para estilização em CSS-in-JS.
- **Vitest + Testing Library** para testes unitários.
- **Eslint + Prettier** para padronização e qualidade do código.
- **JSON Server** simulando uma API REST fake para o frontend consumir.

---

## Tecnologias e Ferramentas Utilizadas

- React 19
- Vite
- Typescript
- React Query
- Styled-components
- Vitest
- Testing Library
- JSON Server
- Eslint
- Prettier

---

## Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) versão 18.x ou superior
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

---

## Como rodar o projeto completo (Front + API Fake)

### 1. Clone o repositório

```bash
git clone https://github.com/thiagonunesdev/betalent-frontend-test.git
cd betalent-frontend-test
```

### 2. Instale as dependências

```bash
yarn install
```

### 3. Inicie o JSON Server (API Fake)

```bash
yarn json-server
```

A API fake estará disponível em:

http://localhost:3001

O arquivo db.json contém os dados simulados que o frontend consome.

### 4. Inicie a aplicação Frontend (Vite)

```bash
yarn dev
```

http://localhost:5173

### 5. Rodando os testes automatizados

```bash
yarn test
```

---

# Scripts Disponíveis

| Comando            | Descrição                             |
| ------------------ | ------------------------------------- |
| `yarn dev`         | Inicia o frontend com Vite            |
| `yarn build`       | Gera o build de produção              |
| `yarn preview`     | Visualiza o build em modo preview     |
| `yarn lint`        | Verifica problemas de lint            |
| `yarn format`      | Formata o código com Prettier         |
| `yarn test`        | Executa os testes unitários           |
| `yarn json-server` | Inicia o backend fake com JSON Server |

---

## Autor

Desenvolvido por Thiago Nunes.
