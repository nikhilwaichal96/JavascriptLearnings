# JavaScript Interview Questions and Answers

## 📋 Table of Contents

| Question | Complexity |
|----------|------------|
| [What is the difference between var, let, and const?](#q1) | Easy |
| [Explain event delegation in JavaScript.](#q2) | Medium |
| [How does JavaScript's prototype chain work?](#q3) | Hard |
| [What is a closure, and how is it used?](#q4) | Medium |
| [Explain the concept of 'this' in JavaScript.](#q5) | Medium |
| [What is the event loop in JavaScript?](#q6) | Hard |

---

## 🔽 Answers

### <a id="q1"></a>What is the difference between var, let, and const?
- `var` is function-scoped and hoisted.
- `let` and `const` are block-scoped.
- `const` cannot be reassigned, while `let` can.

---

### <a id="q2"></a>Explain event delegation in JavaScript.
Event delegation allows you to add a single event listener to a parent element instead of individual child elements, leveraging event bubbling.

---

### <a id="q3"></a>How does JavaScript's prototype chain work?
JavaScript objects inherit properties and methods from their prototype. When accessing a property, the JS engine checks the object and walks up the prototype chain until it finds the property or reaches `null`.

---

### <a id="q4"></a>What is a closure, and how is it used?
A closure is a function that captures variables from its lexical scope, even when called outside of that scope. It allows for private variables and function factories.

---

### <a id="q5"></a>Explain the concept of 'this' in JavaScript.
- In the global context, `this` refers to the global object.
- In object methods, it refers to the object.
- In arrow functions, `this` is lexically bound to the enclosing scope.

---

### <a id="q6"></a>What is the event loop in JavaScript?
The event loop is a concurrency model that handles asynchronous operations. It moves tasks from the event queue to the call stack when the stack is empty, enabling non-blocking behavior.

---
