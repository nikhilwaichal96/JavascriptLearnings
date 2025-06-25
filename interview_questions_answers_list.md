What is difference between== and === explain with example

In JavaScript (and TypeScript), == and === are comparison operators, but they behave differently:


---

✅ == (Equality Operator - Loose Equality)

Compares values only.

Performs type coercion if the types are different.


✅ === (Strict Equality Operator)

Compares both value and type.

No type coercion — if the types are different, it immediately returns false.



---

🔍 Example:

console.log(5 == '5');     // true -> because '5' is converted to number
console.log(5 === '5');    // false -> different types (number vs string)

console.log(null == undefined);  // true -> special case in JS
console.log(null === undefined); // false -> different types

console.log(true == 1);    // true -> true is coerced to 1
console.log(true === 1);   // false -> boolean vs number

console.log(0 == false);   // true -> false is coerced to 0
console.log(0 === false);  // false -> number vs boolean

