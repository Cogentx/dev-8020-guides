# 80-20 Guide to Modern JavaScript

## Creating React-style Components without React

Instead of JSX we put the HTML code inside backticks and use the dynamic syntax of `${...}`

```javascript
function generateOrderEmail({ order, total }) {
  return `
  <div>
  <h2>Your Recent Order for ${total}</h2>
  <p>Please start walking over, we will have your order ready in the next 20 mins.</p>
  <ul>
  ${order.map(
    (o) => `
  <li>${o.name}</li>
  `
  )}
  </ul>
  </div>
  `;
}
```





