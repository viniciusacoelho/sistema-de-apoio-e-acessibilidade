---
description: Convenções do servidor Express e rotas do sistema de apoio e acessibilidade.
globs: index.js
alwaysApply: false
---

# Express (`index.js`)

- Manter a organização padrão do servidor:
  - `express.urlencoded({ extended: true })`
  - `express.json()`
  - `express.static('public')`
  - registro das rotas
  - `listen`
- Configurar variáveis de ambiente utilizando `dotenv`.
- Conectar o `MongoClient` apenas uma vez dentro da função principal da aplicação.
- Inicializar a conexão com o banco antes de registrar rotas que dependem dele.
- Utilizar MongoDB para armazenamento de usuários, conteúdos, recursos de acessibilidade e demais funcionalidades do sistema.
- Senhas devem ser armazenadas utilizando hash com `bcrypt`.
- Tratar erros de duplicidade de dados no MongoDB (ex.: erro `11000` para e-mails já cadastrados).
- Validar todas as entradas recebidas nas rotas POST/PUT/PATCH no servidor.
- Nunca confiar apenas nas validações do HTML frontend.
- Respostas de erro para o usuário devem ser claras e amigáveis, sem expor stack traces ou informações sensíveis.
- Utilizar `console.error` para registrar falhas inesperadas no servidor.
- Manter rotas organizadas e separadas por responsabilidade quando possível.
- Seguir padrão REST nas rotas da aplicação.
- Garantir que funcionalidades relacionadas à acessibilidade permaneçam compatíveis com leitores de tela e navegação por teclado.
<!-- - Evitar lógica excessiva diretamente no `index.js`; preferir separação em controllers, services e middlewares. -->