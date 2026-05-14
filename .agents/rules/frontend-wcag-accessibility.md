---
description: Ao editar frontend do sistema de apoio e acessibilidade, aplicar WCAG 2.1 AA e boas práticas de acessibilidade.
globs: views/**/*.ejs,public/**/*
alwaysApply: false
---

# Frontend → acessibilidade (WCAG 2.1 AA)

Qualquer alteração em arquivos dentro de **`views/`** ou **`public/`** deve seguir as diretrizes de acessibilidade WCAG 2.1 nível AA como requisito obrigatório do projeto.

## Pontos obrigatórios

- **Contraste de cores:**
  - texto comum com contraste mínimo de 4.5:1;
  - texto grande com contraste mínimo de 3:1.
- **Navegação por teclado:**
  - toda funcionalidade essencial deve funcionar apenas com teclado;
  - suporte correto para Tab, Enter, Space e Escape;
  - foco sempre visível nos elementos interativos.
- **Imagens e ícones:**
  - imagens informativas devem possuir `alt` descritivo;
  - imagens decorativas devem usar `alt=""`;
  - ícones SVG decorativos não devem gerar ruído em leitores de tela.
- **Formulários acessíveis:**
  - utilizar `label for` corretamente;
  - agrupar campos relacionados com `fieldset` e `legend` quando necessário;
  - mensagens de erro devem utilizar `aria-describedby`;
  - campos obrigatórios devem ser indicados também por texto, não apenas cor.
- **Estrutura semântica:**
  - manter hierarquia correta de títulos (`h1`, `h2`, `h3`...);
  - utilizar elementos semânticos como `main`, `section`, `nav`, `header`, `footer` e `article`.
- **Responsividade e zoom:**
  - páginas devem continuar utilizáveis com zoom de até 200%;
  - botões e links devem possuir área clicável adequada.
- **Feedback visual e acessível:**
  - mensagens de sucesso e erro devem ser compreensíveis;
  - evitar depender exclusivamente de cores para transmitir informação.
<!-- - **Animações e movimento:**
  - respeitar `prefers-reduced-motion` quando houver animações relevantes. -->
- **Leitores de tela:**
  - garantir ordem lógica de leitura;
  - evitar elementos sem contexto acessível.

## Boas práticas adicionais

- Evitar divs genéricas quando existir elemento semântico apropriado.
- Priorizar acessibilidade antes de adicionar efeitos visuais complexos.
- Testar formulários e navegação utilizando apenas teclado sempre que possível.
- Revisar qualquer novo botão, link, modal, formulário ou componente visual antes do commit final.