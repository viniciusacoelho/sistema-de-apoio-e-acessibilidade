---
description: Padrões das views EJS e partials do sistema de apoio e acessibilidade.
globs: views/**/*.ejs
alwaysApply: false
---

# Views EJS

- Reutilizar **partials** como navbar, footer e componentes compartilhados via `<%- include(...) %>`.
- Passar ao `res.render(...)` apenas as **locals** necessárias para cada página, evitando variáveis globais desnecessárias.
- Conteúdo vindo do usuário deve utilizar escaping padrão do EJS (`<%= %>`) para evitar vulnerabilidades.
- Utilizar `<%- %>` apenas para conteúdos HTML confiáveis e controlados.
- Formulários devem possuir `method` e `action` corretos, mantendo os nomes dos campos alinhados ao `req.body` do servidor.
- Manter **HTML semântico** utilizando elementos apropriados (`main`, `section`, `nav`, `article`, `form`, `label`, etc.).
- Priorizar boas práticas de acessibilidade:
  - labels associadas aos inputs;
  - textos alternativos em imagens;
  - navegação por teclado;
  - hierarquia correta de títulos (`h1` até `h6`);
  - uso adequado de `aria-*` quando necessário.
- Reaproveitar estilos existentes em `assets/css/` antes de criar novos arquivos CSS.
- Evitar scripts inline extensos dentro das views; preferir arquivos JavaScript separados em `assets/js/`.
- Garantir responsividade e boa experiência em dispositivos móveis.