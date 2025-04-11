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

### <a name="q1"></a>❓ What is the difference between var, let, and const?

- `var` is function-scoped and can be hoisted.
- `let` and `const` are block-scoped.
- `const` cannot be reassigned, while `let` can.

---

### <a name="q2"></a>❓ Explain event delegation in JavaScript.

Event delegation allows you to add a single event listener to a parent element instead of multiple listeners to individual child elements. The event bubbles up from the child to the parent.

---

### <a name="q3"></a>❓ How does JavaScript's prototype chain work?

Every object in JavaScript has a prototype. When you access a property or method, the engine looks up the chain of prototypes until it finds it or reaches `null`.

---

### <a name="q4"></a>❓ What is a closure, and how is it used?

A closure is a function that remembers its lexical scope even when it's executed outside of that scope. It allows functions to have "private" variables.

---

### <a name="q5"></a>❓ Explain the concept of 'this' in JavaScript.

`this` refers to the context in which a function is called:
- In global scope, it's the `window` (browser) or `global` (Node.js).
- In methods, it's the object the method belongs to.
- Arrow functions don't bind `this`; they inherit it from the parent scope.

---

### <a name="q6"></a>❓ What is the event loop in JavaScript?

The event loop is what allows JavaScript to be asynchronous. It processes the call stack and handles callbacks from the task queue after the stack is empty.

---
