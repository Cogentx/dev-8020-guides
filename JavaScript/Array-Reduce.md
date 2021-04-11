# 80-20 Guide

## Array Functions

### REDUCE() as an Object of Counts where Keys are Dynamic

```javascript
function countPizzasInTopping(pizzas) {
  // return pizzas with counts
  const counts = pizzas
    .map((p) => p.toppings)
    .flat()
    .reduce((acc, topping) => {
      // check if it is existing topping, otherwise create new entry and include count
      acc[`${topping.id}`] = acc[`${topping.id}`] || {
        id: topping.id,
        name: topping.name,
        count: 0,
      };
      // increment
      acc[`${topping.id}`].count += 1;
      return acc;
    }, {});

  // sort decending by count
  return Object.values(counts).sort((a, b) => b.count - a.count);
}
```


### REDUCE() inside React Component

**Challenge**: You have an Array of Objects; on each object is a ` price ` ;  your challenge is to calculate the  ` totalPrice ` .

**Approach**: Use  ` array.reduce() `  

Option 1:

```javascript
// React App - Context API
// reducer.js
export const getBasketTotal = (basket) => basket?.reduce((total, item) => total + item.price, 0);
```

```javascript
// Subtotal.js
// notice import of `getBasketTotal from reducer.js`
// notice the call to `getBasketTotal` in `value` prop of imported CurrencyFormat Component
import './Subtotal.css';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../State/StateProvider';
import { getBasketTotal } from '../State/reducer';

function Subtotal() {

  const [{basket}] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
```

Option 2:

```javascript
// React App - Context API
  const [{basket}] = useStateValue();
  const total = basket?.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);
  // other code
  value={total}
```
