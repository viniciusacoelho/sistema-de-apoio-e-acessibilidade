












---
name: express-saa-dev-environment
description: Subir e validar ambiente local do sistema de apoio e acessibilidade com Express e MongoDB. Use ao rodar o projeto, configurar o ambiente ou depurar conexão com o banco.
---

# Ambiente de desenvolvimento — sistema de apoio e acessibilidade

## Pré-requisitos

- Node.js LTS
- MongoDB instalado localmente ou acessível via `MONGODB_URI`
- npm ou gerenciador de pacotes compatível

## Passos

1. Na raiz do projeto executar:

```bash
npm install
````

2. Criar o arquivo `.env` baseado no `.env.example`.

3. Configurar as variáveis de ambiente:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB=sistema_apoio
```

4. Subir o servidor:

```bash
node index.js
```

ou em ambiente de desenvolvimento:

```bash
npm run dev
```

5. Abrir no navegador:

```txt
http://localhost:3000
```

## MongoDB

* Utilizar o mesmo nome de banco configurado em `MONGODB_DB`.
* A conexão deve ser inicializada apenas uma vez durante a subida da aplicação.
* Coleções podem incluir:

  * `users`
  * `resources`
  * `support`
  * `accessibility_feedback`
* Índices únicos devem ser utilizados em campos críticos como e-mail de usuário.

## Estrutura recomendada

* `views/` → páginas EJS
* `assets/` → CSS, JavaScript e assets estáticos
<!-- * `routes/` → rotas da aplicação -->
<!-- * `controllers/` → lógica das funcionalidades -->
<!-- * `services/` → regras de negócio -->
<!-- * `middlewares/` → validações e autenticação -->

## Falhas comuns

* **Erro de conexão com MongoDB:** verificar se o MongoDB está rodando e se o `MONGODB_URI` está correto.
* **Porta em uso:** alterar a variável `PORT` no `.env`.
* **Erro ao carregar variáveis de ambiente:** verificar configuração do `dotenv`.
* **Dependências faltando:** executar novamente `npm install`.

## Objetivo do projeto

O sistema tem como foco apoio acadêmico e acessibilidade digital, priorizando inclusão, usabilidade, navegação por teclado e compatibilidade com leitores de tela.