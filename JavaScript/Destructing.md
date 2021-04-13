# JavaScript Destructuring

## Arrays

## Objects

## Function Parameters

### Normal Parameter Destructuring

Normal Parameter Destructuring gives you access to the top-level variable being passed in.

```javascript
export default function SinglePizzaPage({ data }) {
  console.log(data.pizza);
  return (
    <>
      <h2>Single Pizza</h2>
    </>
  );
}
```

### Deep Parameter Destructuring

**Upside**: Deeper destructuring gives you immediate access to deeper variables (pizza in this example)

**Downside**: Deeper destructuring means you no longer have access to the parent Object (data in this example)

```javascript
export default function SinglePizzaPage({ data: { pizza } }) {
  console.log(pizza);
  return (
    <>
      <h2>Single Pizza</h2>
    </>
  );
}
```


