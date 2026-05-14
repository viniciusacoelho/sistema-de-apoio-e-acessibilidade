---
name: wcag-21-aa-testing
description: Auditoria e testes manuais alinhados à WCAG 2.1 nível AA para o sistema de apoio e acessibilidade. Use ao revisar HTML, CSS, EJS, componentes visuais, formulários, navegação por teclado e experiência com leitores de tela.
---

# WCAG 2.1 AA — auditoria e acessibilidade

## Quando usar

- Implementar ou revisar páginas web do sistema.
- Validar acessibilidade antes de commits, entregas acadêmicas ou deploys.
- Revisar componentes em `views/` e `assets/`.
- Testar formulários, menus, modais, dashboards e fluxos de autenticação.
- Verificar compatibilidade com leitores de tela e navegação por teclado.

Mudanças no frontend devem tratar este documento como checklist obrigatório de acessibilidade.

---

# Objetivo do projeto

O sistema de apoio e acessibilidade possui foco em inclusão digital e experiência acessível para diferentes perfis de usuários.

Toda interface deve priorizar:

- navegação simples;
- semântica correta;
- acessibilidade por teclado;
- compatibilidade com leitores de tela;
- responsividade;
- clareza visual;
- contraste adequado.

---

# Mapa rápido (WCAG 2.1 AA)

| Área | WCAG | O que validar |
|------|------|----------------|
| Contraste | 1.4.3 | Texto normal ≥ 4.5:1 |
| Teclado | 2.1.1 | Navegação completa sem mouse |
| Imagens | 1.1.1 | `alt` adequado |
| Semântica | 1.3.1 | Estrutura HTML correta |
| Foco | 2.4.7 | Indicador de foco visível |
| Formulários | 3.3.1 / 3.3.2 | Labels, erros e ajuda acessíveis |
| Reflow | 1.4.10 | Zoom 200% sem quebra crítica |

---

# Contraste (1.4.3)

## Regras obrigatórias

- Texto comum:
  - contraste mínimo de **4.5:1**
- Texto grande:
  - contraste mínimo de **3:1**

## Validar também

- placeholders;
- links;
- estados hover;
- botões;
- foco;
- mensagens de erro;
- componentes desabilitados.

---

# Navegação por teclado (2.1.1)

Toda funcionalidade importante deve funcionar sem mouse.

## Testar

- `Tab`
- `Shift + Tab`
- `Enter`
- `Space`
- `Escape`

## Garantir

- ordem lógica do foco;
- nenhum bloqueio de navegação;
- menus acessíveis;
- modais fechando com Escape;
- foco retornando corretamente após interação.

---

# Skip link

Adicionar link de pulo para conteúdo principal quando houver navegação repetitiva.

Exemplo:

```html
<a href="#main-content" class="skip-link">
  Pular para o conteúdo principal
</a>
````

---

# Imagens e ícones (1.1.1)

## Imagens informativas

Usar `alt` descritivo:

```html
<img src="user.png" alt="Foto do usuário João Silva">
```

## Decorativas

```html
<img src="decoration.svg" alt="">
```

## SVGs decorativos

```html
aria-hidden="true"
```

quando redundantes ao texto.

---

# Estrutura semântica (1.3.1)

Utilizar HTML semântico sempre que possível:

* `main`
* `header`
* `nav`
* `section`
* `article`
* `footer`
* `aside`

## Hierarquia de títulos

* apenas um `h1` principal;
* evitar saltos desnecessários;
* manter sequência lógica.

---

# Focus visível (2.4.7)

Nunca remover `outline` sem substituição acessível.

CSS recomendado:

```css
:focus-visible {
  outline: 3px solid var(--focus-ring, #000);
  outline-offset: 2px;
}
```

---

# Formulários acessíveis

## Obrigatório

* `label for`
* `fieldset`
* `legend`
* mensagens associadas com `aria-describedby`

## Campos obrigatórios

Não indicar apenas por cor.

Exemplo:

```html
<label for="email">
  Email obrigatório
</label>
```

---

# Mensagens dinâmicas

Utilizar `aria-live` para avisos importantes:

```html
<div aria-live="polite">
```

---

# Responsividade e reflow (1.4.10)

## Testar

* largura ~320px;
* tablets;
* desktop;
* zoom até 200%.

## Garantir

* ausência de corte crítico;
* leitura confortável;
* scroll horizontal mínimo.

---

# Tipografia

## Recomendações

* base próxima de `16px`;
* `line-height` confortável;
* evitar blocos densos;
* espaçamento adequado.

---

# Área clicável

Botões e links devem possuir tamanho confortável para toque.

Meta recomendada:

* aproximadamente `44x44px`.

---

# prefers-reduced-motion

Quando houver animações:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}
```

---

# Checklist manual

## Teclado

* [ ] Navegação completa usando Tab
* [ ] Foco visível
* [ ] Ordem lógica
* [ ] Sem bloqueios de foco

## Contraste

* [ ] Texto legível
* [ ] Botões identificáveis
* [ ] Estados hover/focus acessíveis

## Conteúdo

* [ ] `alt` revisados
* [ ] Hierarquia de headings correta

## Formulários

* [ ] Labels associadas
* [ ] Mensagens acessíveis
* [ ] Campos obrigatórios claros

## Responsividade

* [ ] Mobile funcional
* [ ] Zoom 200% utilizável

---

# Ferramentas recomendadas

| Ferramenta              | Objetivo             |
| ----------------------- | -------------------- |
| Lighthouse              | Auditoria automática |
| axe DevTools            | Regras WCAG          |
| NVDA                    | Teste leitor de tela |
| VoiceOver               | Testes Apple         |
| WebAIM Contrast Checker | Contraste            |

---

# Fluxo mínimo antes de finalizar alterações

1. Executar Lighthouse Accessibility.
2. Navegar pela página apenas com teclado.
3. Validar foco visível.
4. Testar formulário principal.
5. Revisar contraste.
6. Testar responsividade.
7. Verificar zoom em 200%.

---

# Referências oficiais

* WCAG 2.1
* WAI Accessibility Guidelines
* ARIA Authoring Practices

---

# Princípio final

Acessibilidade não é funcionalidade opcional.

Toda alteração visual ou estrutural deve considerar usuários com diferentes necessidades de navegação, visão, mobilidade e leitura assistiva.