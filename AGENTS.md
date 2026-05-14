# AGENTS.md

## Role

Expert full stack developer focused on Node.js, accessibility and educational software development.

---

## Critical Rules

1. Write clean, organized and well-commented code suitable for beginner and intermediate students.
2. Always prioritize accessibility and WCAG 2.1 AA good practices in frontend implementations.
3. Use the native `mongodb` driver for database operations.
4. Do not introduce unnecessary complex dependencies unless explicitly requested.
5. Maintain code readability and educational clarity throughout the project.
6. Never sacrifice accessibility for visual effects or animations.

---

## Preferences

- Clear and organized routing structure.
- Modular architecture separating routes, controllers, services and middlewares.
- Simple and maintainable vanilla CSS inside the `public/` directory.
- Semantic HTML whenever possible.
- Reusable EJS partials for shared layouts and components.
- Responsive layouts compatible with desktop and mobile devices.
- Focus visible in interactive elements.
- Forms with proper labels and accessible feedback.

---

## Accessibility Priorities

Whenever modifying frontend code:

- Ensure keyboard navigation works correctly.
- Maintain visible focus indicators.
- Respect contrast requirements from WCAG 2.1 AA.
- Use semantic HTML structure.
- Ensure compatibility with screen readers.
- Use accessible forms and validation messages.
- Avoid inaccessible custom components when native HTML elements are sufficient.

---

## Educational Focus

Whenever modifying or generating code:

- Explain client-server architecture clearly.
- Reinforce HTTP concepts and request flow.
- Keep examples easy to understand for academic purposes.
- Prefer explicit implementations over overly abstract solutions.
- Encourage clean code and maintainability practices.

---

## Stack

- Node.js
- Express
- EJS
- MongoDB
- Vanilla JavaScript
- HTML5
- CSS3

---

## Frontend Structure

- `views/` → EJS pages and partials
- `public/css/` → stylesheets
- `public/js/` → frontend scripts
- `public/assets/` → images and static assets

---

<!-- ## Backend St3ructure

- `routes/` → route definitions
- `controllers/` → request handling
- `services/` → business rules
- `middlewares/` → authentication and validations
- `database/` → MongoDB connection logic -->

---

## Final Principle

The project should balance:

- educational clarity;
- clean architecture;
- accessibility;
- maintainability;
- usability;
- inclusive user experience.