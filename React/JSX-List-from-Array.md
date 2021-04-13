# React

## JSX inside React Component

### Create a List from an Array inside a Prop Object

Use `{...}` to tell JSX that you are using JavaScript; then `.map()` over the array returning the list.

#### Example 1: Inside an UL

```javascript
export default function SinglePizzaPage({ data: { pizza } }) {
  console.log(pizza);
  return (
    <>
      <Img fluid={pizza.image.asset.fluid} />
      <div>
        <h2 className="mark">{pizza.name}</h2>
        <ul>
          {pizza.toppings.map((topping) => (
            <li>{topping.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
```

#### Example 2: Inside an Paragraph (P-tag)

```javascript

```
