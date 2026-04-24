# Guia de Acessibilidade e Usabilidade — Sistema S.A.A. (WCAG 2.1 AA)

## Sobre o Projeto

O **Sistema de Apoio e Acessibilidade (S.A.A.)** é uma aplicação web que visa promover inclusão social, permitindo o cadastro, consulta e denúncia de condições de acessibilidade em espaços urbanos.

Este projeto foi desenvolvido com foco em **acessibilidade digital**, seguindo as diretrizes da **WCAG 2.1 nível AA**, garantindo que pessoas com diferentes limitações possam utilizar o sistema com autonomia.

---

# Conformidade WCAG 2.1 Nível AA

---

## 1. CONTRASTE (1.4.3 - Contrast Minimum)

**Status:** ✓ Implementado

* Contraste mínimo de:

  * **4.5:1** para textos normais
  * **3:1** para textos grandes

**Aplicações no sistema:**

* Botões com cores acessíveis (ex: azul e verde com texto branco)
* Textos em fundo claro com alta legibilidade
* Destaque visual em elementos interativos (hover e focus)

---

## 2. NAVEGAÇÃO POR TECLADO (2.1.1 - Keyboard)

**Status:** ✓ Implementado

**Recursos:**

* Navegação completa utilizando `Tab`
* Ordem lógica de foco (fluxo visual da página)
* Botões e links acessíveis via `Enter`
* Inputs e formulários navegáveis sem mouse

**Exemplo prático:**

* Campo de busca ativado com tecla `/`
* Navegação entre cards e botões funcional

---

## 3. IMAGENS COM ALT (1.1.1 - Non-text Content)

**Status:** ✓ Implementado

**Aplicação no sistema:**

```html
<img src="<%= inclusao.imagem %>" alt="Imagem do local acessível">
```

**Boas práticas aplicadas:**

* Descrição clara de imagens relevantes
* Uso de `alt=""` para imagens decorativas
* Preview de imagens com descrição acessível

---

## 4. ARIA E SEMÂNTICA (1.3.1 - Info and Relationships)

**Status:** ✓ Implementado

**Uso no sistema:**

```html
<button aria-label="Voltar para página anterior">⬅ Voltar</button>

<input type="text" aria-label="Buscar locais acessíveis">

<section aria-labelledby="titulo-inclusoes">
    <h1 id="titulo-inclusoes">Inclusões</h1>
</section>
```

**Atributos utilizados:**

* `aria-label`
<!-- * `aria-labelledby` -->
<!-- * `role` em navegação -->
<!-- * `aria-hidden` para ícones decorativos -->

---

## 5. FOCO VISÍVEL (2.4.7 - Focus Visible)

**Status:** ✓ Implementado

```css
:focus {
    outline: 3px solid blue;
    outline-offset: 2px;
}
```

**Características:**

* Destaque claro ao navegar com teclado
* Compatível com diferentes navegadores
* Mantém consistência visual

---

## 6. ESTRUTURA E HIERARQUIA (1.3.1)

**Status:** ✓ Implementado

**Estrutura padrão:**

```html
<header>
<nav>...</nav>
</header>

<main>
    <section>
        <h1>...</h1>
        <h2>...</h2>
    </section>
</main>

<footer>...</footer>
```

**Boas práticas:**

* Apenas um `<h1>` por página
* Hierarquia correta (h1 → h2 → h3)
* Uso de `<main>`, `<section>`, `<nav>`, `<footer>`

---

## 7. LEGIBILIDADE E TIPOGRAFIA

**Status:** ✓ Implementado

* Fonte padrão: **Arial (sans-serif)**
* Tamanho base: **16px**
* Espaçamento adequado entre linhas
* Layout limpo e organizado

---

## 8. FORMULÁRIOS ACESSÍVEIS (3.3.2)

**Status:** ✓ Implementado

```html
<label for="name">Nome do Local</label>
<input type="text" id="name">

<label for="message">Mensagem</label>
<textarea id="message"></textarea>
```

**Aplicações:**

* Labels associados corretamente
* Feedback de erro exibido
* Inputs com foco visível
* Upload de imagem com preview acessível

---

## 9. RESPONSIVIDADE (1.4.10 - Reflow)

**Status:** ✓ Implementado

* Layout adaptável para:

  * Mobile
  * Tablet
  * Desktop
* Grid responsivo para cards de inclusões
<!-- * Sem quebra de layout em zoom 200% -->

---

# CHECKLIST DE TESTES

## Navegação

* [✓] Funciona com teclado (Tab / Shift+Tab)
* [✓] Focus visível em todos os elementos
* [✓] Links e botões acessíveis

## Conteúdo

* [✓] Imagens com alt
* [✓] Textos legíveis
* [✓] Hierarquia correta

## Formulários

* [✓] Labels associados
* [✓] Feedback de erro
* [✓] Navegável sem mouse

## Layout

* [✓] Responsivo
* [✓] Sem sobreposição
* [✓] Funciona com zoom

---

# Ferramentas Utilizadas

### Testes automáticos:

* Lighthouse (Chrome DevTools)
* WAVE
* Validação de contraste

### Testes manuais:

* Navegação por teclado
* Inspeção de foco
* Teste responsivo

---

# Melhorias Futuras

* [x] Modo alto contraste
* [x] Melhorar otimização de imagens (WebP/AVIF)
* [x] Redução de CSS e JS não utilizados
* [X] Testes com leitores de tela (NVDA / VoiceOver)
* [✓] Paginação na listagem de inclusões

---

# Referências

* [https://www.w3.org/WAI/WCAG21/](https://www.w3.org/WAI/WCAG21/)
* [https://developer.mozilla.org/en-US/docs/Web/Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [https://webaim.org/](https://webaim.org/)

---

# Conclusão

O **S.A.A.** foi desenvolvido com foco em inclusão digital, garantindo que usuários com diferentes necessidades possam acessar informações sobre acessibilidade urbana de forma simples, rápida e eficiente.

> **A tecnologia deve incluir, não excluir.**