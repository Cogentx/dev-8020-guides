# 80-20 Guide to React

## React Hooks

[FireShip-Hooks-video](https://youtu.be/TNhaISOUy6Q)


React has 10 Built-in Hooks plus you can build your own from scratch:

### [Basic Hooks](https://reactjs.org/docs/hooks-reference.html#basic-hooks)

[useState](https://reactjs.org/docs/hooks-reference.html#usestate)



[useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
[useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

### [Additional Hooks](https://reactjs.org/docs/hooks-reference.html#additional-hooks)

[useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
[useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
[useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
[useRef](https://reactjs.org/docs/hooks-reference.html#useref)
[useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
[useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
[useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

### Custom Hooks


### From Classes to Hooks

Before React 16.8, Classes were required to access certain functionality.

#### State

**State**  was title coupled to a  **Class-based Component**  and referenced in the  **Constructor**  

![RH](./../___img/React-Hooks01.png)

What you could end up with was a complex tree of nested components

### Create Custom Hook - useForm

We could just build our own **Form Custom Hook**. Create a file 'useForm.js' in the 'utils' folder.

Inside 'useForm.js', create and export a function that contains **useState** and inside function. Return an object from the outer function that includes the **state values** and the **updateValue** function we created.

Since the **state values** is an object, we must **spread** its existing key/value pairs into the object being passed to the **useState** along with the new value.

```javascript
import { useState } from 'react';

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    // check if input is meant to be a 'number';
    // - if so, it will come in as a String
    // - and will need to be converted back to Number

    // destructure the `e.target` <input> to get 'name' and 'value'
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }

    setValues({
      // copy existing state 'value' into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }

  // this now resembles the useState Hook except that it is customized to Forms
  // - we are passing back the state 'values' and a new 'update state' function
  return { values, updateValue };
}
```
