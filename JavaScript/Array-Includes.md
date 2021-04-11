# Array Methods

## Array.includes()

If you have an Array and you want to see if one of the elements of the Array is a certain value you can use [].includes() // returns True or False Boolean

```javascript
   const pizzasWithTopping = pizzas.nodes.filter((p) =>
      p.toppings.map((t) => t.name).includes(topping.name)
    );
```
