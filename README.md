# Angular Task 3 – Task Manager

## 🎯 Goal

Build a small Angular application to practice:

- components
- templates
- modules
- services & dependency injection
- directives
- pipes
- template variables
- control flow

using **static data only**.

---

## 📦 App Description

The application displays:

- a list of tasks
- details for the selected task
- a reusable panel component for wrapping content

Example tasks:

- Finish Angular lesson
- Go for a bike ride
- Read 20 pages
- Buy groceries

When the user clicks a task, its details are shown on the right.

---

## 🧠 Requirements by Topic

### 1. Components & Data Binding

Create separate components for:

- Task list
- Task detail
- Panel

Display data using:

- interpolation
- property binding
- event binding

---

### 2. Inputs & Outputs

Use:

- `input` to pass the selected task to child components
- `output` to notify the parent when a task is selected
- computed

---

### 3. Service & Dependency Injection

Create a simple logging service.

Inject it into components.

Log messages when:

- a task is selected
- components are initialized
- components are destroyed

---


### 5. Template Control Flow

Use:

- `@for` to render tasks
- `@if` to display fallback text when no task is selected

Use a proper `track` expression.

---

### 6. Directives

Create one custom attribute directive.

Example ideas:

- highlight completed tasks
- highlight high-priority tasks

---

### 7. Pipes

Create one custom pipe.

Example ideas:

- format priority  
  `high` → `High Priority`
- format status  
  `todo` → `To Do`

Use the pipe in templates.

---

### 8. Template Variables & Filtering

Add a sort button witch sort

Use a **template reference variable** to read the value.

Example:

- user types `"bike"`
- clicks **Filter**
- only matching tasks are shown

Do not use forms or `ngModel`.

---

### 9. Content Projection

Create a reusable `PanelComponent`.

Use `<ng-content>` to project content inside the panel.

---

### 10. Host Element

Add one basic host configuration in `PanelComponent`.

Example:

- add a CSS class to the host
- style the panel using the host

---

## 📁 Suggested Data Structure

```ts
[
  {
    id: 't1',
    title: 'Finish Angular lesson',
    description: 'Complete the section about services and dependency injection.',
    priority: 'high',
    status: 'todo'
  },
  {
    id: 't2',
    title: 'Go for a bike ride',
    description: 'Ride for 60 minutes in zone 2.',
    priority: 'medium',
    status: 'done'
  },
  {
    id: 't3',
    title: 'Buy groceries',
    description: 'Milk, eggs, oats, bananas.',
    priority: 'low',
    status: 'todo'
  }
]


✅ Expected Features

Your app should let the user:

see all tasks

select a task

see task details

filter tasks

view content inside reusable panels

see styling from a custom directive

see formatted values through a custom pipe



Task List SCSS




button {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.5rem;
  background-color: #334155;
  color: #e5e7eb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  text-align: left;
}

button:hover {
  background-color: #475569;
}

button.active {
  background-color: #3b82f6;
  color: #020617;
}





Task Detail SCSS



:host {
  display: block;
}

input {
  padding: 0.4rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #475569;
  background-color: #0f172a;
  color: #e5e7eb;
  outline: none;
}

input::placeholder {
  color: #94a3b8;
}

input:focus {
  border-color: #60a5fa;
}

button {
  margin-left: 0.5rem;
  padding: 0.4rem 0.75rem;
  border-radius: 4px;
  border: none;
  background-color: #3b82f6;
  color: #0f172a;
  cursor: pointer;
  font-weight: 500;
}

button:hover {
  background-color: #60a5fa;
}

p {
  margin-top: 1rem;
  color: #e5e7eb;
}

.task-meta {
  margin-top: 1rem;
  color: #cbd5e1;
}



Panel SCSS




.panel {
  padding: 1.25rem;
  background-color: #1e293b;
  border-radius: 8px;
  min-height: 12rem;
}

.panel-host {
  display: block;
}



App SCSS
main {
  max-width: 50rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

main {
  max-width: 50rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: "Poppins", sans-serif;
  background: radial-gradient(circle at top left, #0f172a, #020617);
  color: #e5e7eb;
}


```
