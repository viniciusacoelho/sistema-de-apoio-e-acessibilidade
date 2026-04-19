# Sistema de Apoio e Acessibilidade — CESMAC · Sistemas de Informação

Aplicação web desenvolvida como projeto acadêmico do curso de Sistemas de Informação da CESMAC.
O sistema tem como objetivo oferecer suporte e facilitar o acesso a informações e serviços para pessoas com diferentes necessidades de acessibilidade, promovendo inclusão digital.

O projeto utiliza Node.js com Express no backend, páginas dinâmicas com EJS no frontend e integração com banco de dados MongoDB.

---

## 🚀 O que você vai encontrar aqui

* Servidor HTTP com Express (`index.js`)
* Sistema de rotas para navegação entre páginas
* Views dinâmicas com EJS (`views/`)
* Interface responsiva com HTML e CSS (`assets/`)
* Funcionalidades de:

  * Cadastro e login de usuários
  * Navegação por categorias de acessibilidade
  * Sistema de apoio com envio de mensagens
  * Formulários interativos

---

## 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter instalado:

* Node.js (versão LTS recomendada)
* npm (gerenciador de pacotes do Node)
* MongoDB (local ou via MongoDB Atlas)

---

## ⚙️ Como rodar o projeto

Na pasta do projeto, execute:

```bash
npm install
```

Para iniciar o servidor:

```bash
node index.js
```

Ou, em modo desenvolvimento (com recarregamento automático):

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:3000
```

---

## 🌐 Rotas principais

| Caminho                       | Descrição                          |
| ----------------------------- | ---------------------------------- |
| `/`                           | Página inicial                     |
| `/login`                      | Tela de login                      |
| `/cadastre-se`                   | Cadastro de usuário                |
| `/servicos`                    | Serviços disponíveis para o usuário                  |
| `/encontre-suporte`                    | Página de apoio ao usuário         |
| `/deficiente-auditivo`        | Conteúdo para deficiência auditiva |
| `/deficiente-fisico-ou-motor` | Conteúdo para deficiência física   |
| `/sessenta-anos-ou-mais`      | Conteúdo para idosos               |
| `/contato`                    | Página de contato                  |

---

## 📁 Estrutura de pastas (resumo)

```
sistema-de-apoio-eacessibilidade/
├── assets/           # Arquivos estáticos (CSS, images, JS)
└── views/            # Templates EJS (Partials)
├── index.js          # Configuração do servidor e rotas
├── package-lock.json
├── package.json
└── README.md
```

---

## 🎯 Objetivos de aprendizado (SI)

Este projeto foi desenvolvido com foco em:

* Arquitetura cliente-servidor
* Criação de APIs e rotas com Express
* Uso de templates dinâmicos com EJS
* Organização de projetos web
* Responsividade e acessibilidade na interface
* Integração com banco de dados MongoDB

---

## 🗄️ Banco de Dados (MongoDB)

Utilize o MongoDB Atlas para ambiente em nuvem.

---

## ♿ Foco do Projeto

O sistema foi pensado para promover:

* Inclusão digital
* Acessibilidade na web
* Facilidade de navegação para diferentes públicos
* Interface simples e intuitiva

---

## 📚 Projeto acadêmico

Projeto desenvolvido para fins educacionais no curso de Sistemas de Informação — CESMAC.

## 👨‍💻 Integrantes

João Victor Araújo Coêlho

José Ray Barros Nunes

Rangel Farias Marques

Rogério Carvalho

Vinícius Araújo Coêlho