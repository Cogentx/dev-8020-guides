# 80-20 Guide to React

## Hooks

### Context API

#### Context with Reduce Function

**Use Case**
Calculate the ` Balance ` based on the amount values stored within the ` transactions ` using the **Context API** and the ` reduce() ` function.

```javascript
import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {

  const {transactions} = useContext(GlobalContext);
  const balance = transactions.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${balance.toFixed(2)}</h1>
    </>
  )
}
```

![Context1](./img/Context1.png)


### React Context API Explanation

Once we push data into the Context API we can extract it anywhere else.

![C02](../___img/React-Context-API-diagram.png)

![RCapi02](../___img/RCapi002.png)

#### Create the `StateProvider`

Create the  `StateProvider`

```javascript
// StateProvider.js
import React, {createContext, useReducer, useContext} from 'react';

// Prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide data layer to all Components
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
```

**Create the  ` reducer | initialState `  to make Context API usable in App**

**` initialState `**

The  ` initialzeState `  is passed directly as a **Prop** and represents how the **Data Layer** looks in the beginnning before we make changes to **State** from within our App.

**` reducer `**

The  ` reducer `  is passed directly as a **Prop** and represents how we **interact** with and **update** the **Data Layer**.  While it is relatively easy to take data out of the **Data Layer** with the **Context API**; it is important to understand how we use a  ` reducer `  function with **dispatching** and **actions** to cleanly, clearly and consistantly update the **Data Layer**.

**Use  ` StateProvider | Reducer | initialState `  to Implement Context API in App**

In the **index.js** file we call the  ` StateProvider `  pass Props ` reducer, initialState, children `.  While the  ` reducer | initialState `  are imported and passed as **props** in the usual way;  ` children `  is a different kind of **prop**.

**` children `**

The  ` children `  prop is NOT passed directly like a **normal-standard-prop**.  It is special in that it represents whatever is in between **opening** and **closing** Component-Tags (in this case the tag we called  ` StateProvider `  which is implemented by wrapping our  ` App `  Component).

```javascript
// index.js
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider} from './State/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
```

### Redux and Context API

While the are **not the same thing**, they do use a very similar **pattern**.  That is the idea of a **global store** of data and the idea **dispatching and interpreting ACTIONS** to update this store.

```javascript
// reducer.js
export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action.item, state);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
  
    default:
      return {
        ...state,
      }
  }
}

export default reducer;
```

