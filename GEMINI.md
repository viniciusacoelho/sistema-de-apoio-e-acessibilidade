# GEMINI.md

## Project Context

Educational web application focused on accessibility, academic support and inclusive digital experience for Information Systems students.

The project uses:

- Node.js
- Express
- EJS
- MongoDB
- Vanilla JavaScript
- HTML5 and CSS3

The application prioritizes accessibility, semantic structure and educational clarity while reinforcing full stack development concepts.

---

## Standards

- Use Vanilla JavaScript with CommonJS (`require`) syntax.
- Use Express for routing and server configuration.
- Use EJS for server-side rendering.
- Use semantic HTML whenever possible.
- Keep frontend assets inside the `assets/` directory.
- Maintain accessibility practices aligned with WCAG 2.1 AA.
- Prefer modular and readable code organization.

---

## Constraints

- Keep code simple and understandable for beginner and intermediate students.
- Do not over-engineer solutions.
- Do not use TypeScript.
- Do not use SPA frameworks such as React, Next.js, Vue or Angular unless explicitly requested.
- Avoid unnecessary dependencies.
- Maintain clear separation between:
  - server logic;
  - views;
  - styles;
  - scripts;
  - database access.
- Avoid complex abstractions that reduce educational readability.

---

## Accessibility Requirements

Frontend implementations must:

- support keyboard navigation;
- maintain visible focus states;
- use accessible forms;
- provide sufficient color contrast;
- include semantic HTML structure;
- work with screen readers;
- remain responsive on mobile devices.

WCAG 2.1 AA should be treated as a project baseline.

---

## Recommended Structure

```txt
project/
│
├── index.js
├── routes/
├── controllers/
├── services/
├── middlewares/
├── database/
├── views/
│   ├── partials/
│   └── pages/
├── public/
│   ├── css/
│   ├── js/
│   └── assets/
└── docs/
````

---

## Development Philosophy

The project should prioritize:

* educational clarity;
* accessibility;
* clean architecture;
* maintainability;
* usability;
* inclusive design.

Code should help students understand:

* HTTP request flow;
* client-server architecture;
* authentication basics;
<!-- * MVC organization; -->
* accessibility implementation in real applications.