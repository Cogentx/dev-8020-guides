# Variables

## var

- function scoped
- dangerous to **global scope**
  - it's possible to overright window properties
- **can** be re-declared
- **can** be updated
- ways to simulate locking scope
  - IIFE (immediately invoked function Expression)
  - function that immediately runs itself after creation
  - vars do not leak into global scope
- **temporal dead zone** issues
  - ` vars ` are created before code is fully executed which means the ` var ` is known about before the **value** is assigned -- potential for bugs.
  - if you ` console.log() ` the variable before the assignment it will be ` undefined `
  - whereas with ` let and const ` you cannot access the variable at all prior to being defined so you will get a **build error**.

## let and const

- ` const ` **DIFFERENCES**
  - **cannot** be updated
  - objects cannot be reassigned but attributes/properties can be updated
    - if you do need to lock properties as well use `object.freeze`
    - see MDN for more info (not part of ES6)
  - **cannot** use inside loop since it cannot be _overwritten_
  - 
- **WHEN TO USE ` let vs. const `**
  - use ` const ` by **default**
  - use ` let ` only when re-binding is needed
  - ` var ` should not be used except in specific use-cases where the **JS Keyword THIS** will be impacted such as inside certain **event handlers (button-click for example)**



- blocked scope
- **cannot** be re-declared in **same scope**
- can be updated
- objects can be reassigned as well as attributes/properties updated.
- IIFE not needed because **block scoped**
  - even if you just place a  set of ` { } `
  - meaning, no function required for scoping.

```javascript
{
  let name = 'Buddy';
  console.log(name);
}
{
  const name = 'Buddy';
  console.log(name);
}
```

- fix ` FOR-LOOP ` issue with ` var `
  - first problem is that **global** variable created and leaked into **window** or parent-scope
  - anything that delays execution within loop from AJAX-request to ` setTimeout() ` will cause incorrect variable result since execution of the loop does not stop; the number inside the loop keeps incrementing so when you use it... will not be correct (usually will be at last number)
  - variable is being overwritten each time whereas ` let and const ` keep their own value
  - 
  - 

