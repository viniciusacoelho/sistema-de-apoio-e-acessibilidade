# Documento de Requisitos de Produto (PRD) — Sistema de Apoio e Acessibilidade

**Versão:** 1.0  
**Data:** 12 de maio de 2026  
**Arquivo:** `docs/prd/saa-prd.md`  
**Contexto:** Aplicação web educacional utilizando Express, EJS e MongoDB com foco em acessibilidade digital, apoio acadêmico e inclusão.

---

# 1. Visão do produto

Sistema web voltado para apoio acadêmico e acessibilidade digital, permitindo que usuários tenham acesso a recursos acessíveis, conteúdos organizados, suporte e ferramentas de navegação inclusiva.

O projeto possui foco educacional e visa aplicar conceitos de:

- desenvolvimento full stack;
- acessibilidade web;
- autenticação;
- arquitetura cliente-servidor;
- responsividade;
- boas práticas de UX/UI.

---

# 2. Objetivos

- Permitir cadastro e autenticação de usuários.
- Disponibilizar ambiente acessível e responsivo.
- Aplicar práticas WCAG 2.1 AA.
- Garantir navegação por teclado e compatibilidade com leitores de tela.
- Organizar recursos e conteúdos de apoio.
- Manter código modular e compreensível.

---

# 3. Escopo funcional

## 3.1 Cadastro de usuários

| ID | Requisito | Prioridade |
|----|------------|------------|
| REG-01 | Formulário de cadastro com nome, e-mail e senha. | Alta |
| REG-02 | Validar campos obrigatórios. | Alta |
| REG-03 | Validar formato de e-mail. | Alta |
| REG-04 | Senha armazenada com hash utilizando bcrypt. | Alta |
| REG-05 | Impedir cadastro duplicado por e-mail. | Alta |
| REG-06 | Exibir mensagens claras de erro e sucesso. | Média |

### Critérios de aceitação

- Usuário consegue criar conta com sucesso.
- Não é possível cadastrar e-mails duplicados.
- Senhas não são armazenadas em texto puro.

---

## 3.2 Login e autenticação

| ID | Requisito | Prioridade |
|----|------------|------------|
| AUTH-01 | Login utilizando e-mail e senha. | Alta |
| AUTH-02 | Sessão persistente após autenticação. | Alta |
| AUTH-03 | Logout funcional. | Média |
| AUTH-04 | Rotas protegidas exigem autenticação. | Alta |
| AUTH-05 | Mensagens genéricas para credenciais inválidas. | Média |

### Critérios de aceitação

- Usuário autenticado permanece logado.
- Usuário não autenticado não acessa áreas protegidas.

---

## 3.3 Perfil do usuário

| ID | Requisito | Prioridade |
|----|------------|------------|
| PROF-01 | Exibir nome e e-mail do usuário. | Alta |
| PROF-02 | Exibir informações acessíveis e organizadas. | Média |
| PROF-03 | Área disponível apenas para usuários autenticados. | Alta |

### Critérios de aceitação

- Usuário consegue visualizar seus dados após login.

---

## 3.4 Recursos de apoio

| ID | Requisito | Prioridade |
|----|------------|------------|
| SUP-01 | Listar conteúdos e recursos de apoio. | Alta |
| SUP-02 | Permitir visualização organizada dos conteúdos. | Alta |
| SUP-03 | Exibir conteúdos com estrutura acessível. | Alta |
| SUP-04 | Permitir futura expansão para categorias e filtros. | Média |

### Critérios de aceitação

- Usuários conseguem navegar pelos recursos facilmente.

---

## 3.5 Acessibilidade digital

| ID | Requisito | Prioridade |
|----|------------|------------|
| ACC-01 | Navegação completa por teclado. | Alta |
| ACC-02 | Contraste compatível com WCAG 2.1 AA. | Alta |
| ACC-03 | Compatibilidade com leitores de tela. | Alta |
| ACC-04 | Estrutura HTML semântica. | Alta |
| ACC-05 | Responsividade em dispositivos móveis. | Alta |
| ACC-06 | Focus visível em elementos interativos. | Alta |
| ACC-07 | Formulários acessíveis com labels corretas. | Alta |

### Critérios de aceitação

- Lighthouse Accessibility com pontuação elevada.
- Navegação funcional sem mouse.
- Zoom de até 200% utilizável.

---

# 4. Requisitos não funcionais

| Área | Descrição |
|------|------------|
| Segurança | Uso de bcrypt, validação no backend e variáveis de ambiente. |
| Usabilidade | Interface clara, intuitiva e em português. |
| Acessibilidade | Conformidade com WCAG 2.1 AA. |
| Responsividade | Compatibilidade com desktop, tablet e mobile. |
| Organização | Estrutura modular utilizando Express e EJS. |
| Dados | MongoDB para persistência da aplicação. |

---

# 5. Fora do escopo

- Aplicativo mobile nativo.
- Integração com APIs externas complexas.
- Sistema avançado de permissões.
- Chat em tempo real.
- Integração com inteligência artificial.
- Recuperação de senha por e-mail.

---

# 6. Métricas de sucesso

- Fluxo completo de cadastro e login funcionando.
- Navegação acessível por teclado.
- Lighthouse Accessibility com resultado elevado.
- Interface responsiva e utilizável em múltiplos dispositivos.
- Código organizado e modularizado.

---

# 7. Dependências e riscos

| Área | Descrição |
|------|------------|
| MongoDB | Necessário para persistência de dados. |
| Node.js | Ambiente principal da aplicação. |
| Sessões | Necessárias para autenticação persistente. |
| Acessibilidade | Exige validação contínua durante o desenvolvimento. |

---

# 8. Glossário

| Termo | Significado |
|--------|-------------|
| WCAG | Diretrizes internacionais de acessibilidade web. |
| Autenticação | Processo de login do usuário. |
| Autorização | Controle de acesso às funcionalidades. |
| Responsividade | Adaptação da interface para diferentes telas. |
| Leitor de tela | Tecnologia assistiva para usuários com deficiência visual. |

---

*Documento alinhado ao projeto acadêmico de sistema de apoio e acessibilidade utilizando Express, EJS e MongoDB.*