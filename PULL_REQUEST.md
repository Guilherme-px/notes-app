# Documentação da aplicação

A aplicação foi desenvolvida com a biblioteca React.js e a linguagem typescript usando tailwind para a customização, foi usado também eslint, prettier com husky e lint-staged para padronizar o código e controlar os commits para que não sejam feitos commits fora das regras definidas para padronização.

## Acessar projeto

https://client-nine-lime.vercel.app/

## Índice

1. [Introdução](#introdução)
2. [Instalação](#instalação)
3. [Configuração](#configuração)
4. [Uso](#uso)
5. [Docs](#docs)
6. [Deploy](#deploy)
7. [CI/CD](#cicd)

## Introdução

A aplicação React é um aplicativo de gerenciamento de tarefas simples que permite aos usuários criar, editar e excluir tarefas criadas.

## Instalação

Siga estas etapas para configurar a aplicação em sua máquina local:

1. Clone o repositório: `git clone https://github.com/Guilherme-px/notes-app.git`
2. Navegue para o diretório da aplicação.
3. Instale as dependências: `npm install`

## Configuração

Antes de iniciar a aplicação, certifique-se de configurar as seguintes variáveis de ambiente conforme exemplificado no arquivo .env.example:

-   `VITE_BASE_URL`: URL da API que a aplicação utilizará.

## Uso

Para iniciar a aplicação, execute o seguinte comando: `npm run dev`

## Docs

O projeto esta divido em:

**Components:**

-   Cards:

Onde está localizado todos os componentes para criar os cards usados na aplicação.

-   Modal:

Onde é criado o modal para selecionar as cores do card.

-   Navbar:

Onde é criada a navbar da aplicação.

**Pages:**

-   Home.tsx:

Arquivo onde renderiza os componentes da pagina inicial da aplicação.

**hooks:**

-   useNotes:

Hooks customizados para consumir a api onde esta sendo definido os métodos CRUD.

**services:**

-   api.ts

Configuração do axios.

## Deploy

Para fazer deploy da aplicação na vercel siga os seguintes passos

-   Instale a cli da vercel: `npm i -g vercel`
-   Rode o comando: `vercel login`
-   Faça login na sua conta github ligada a vercel
-   Rode o comando: `vercel`
-   Siga os passos no terminal que o deploy sera feito na sua conta da vercel.

## CI/CD

A aplicação esta usando CI/CD com github actions configurado em `.github/workflows/main.yml`

para fazer deploy com github actions configure as chaves de acesso: VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_ORG_ID.

essas chaves você tera acesso a elas após usar o comando da vercel para ter feito o deploy inicial o que irá criar um aquivo **.vercel** e as chaves estarão no arquivo **project.json** dentro dessa pasta, menos a vercel token que você encontrara acessando sua conta vercel em https://vercel.com/account/tokens. Crie o token e copie ele.

Após ter todos os tokens em mãos, acesse seu repositorio do projeto no github, entre em `settings`, `secrets and variables`, `actions` e configure lá as suas chaves da vercel.

Tendo configurado suas chaves basta fazer um push do projeto ou acessar a aba actions no seu repositorio para ver o workflow rodando.

## Nome do workflow:

```
name: CI/CD
```

## Configuração da branch onde o workflow irá rodar:

```
on:
    push:
        branches: - main
```

## Nome do job

```
job:
```

## Nome do job e configuração ondo ambiente onde ele irá rodar:

```
build-and-deploy:
    runs-on: ubuntu-latest
```

## Definição das etapas

Aqui ele primeiro clona o repositório para uma maquina virtual, depois especifica a versão do node, instala as dependências, faz o build da aplicação e no fim implanta a aplicação na vercel usando as chaves de acesso configuradas no github:

```
steps:
    - name: Checkout repository
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
          node-version: 18.16.0

    - name: Install dependencies
      run: npm ci

    - name: Build application
      run: npm run build

    - name: Vercel Action
      uses: amondnet/vercel-action@v19
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
```
