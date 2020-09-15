# 80-20 Guide

## Array Functions

### SLICE() Method and SPREAD (...) Operator

**Challenge**: You have an Array of Objects and you want to remove the exact item the user selected for deletion.

**Approach**: We will use  ` array.slice() `  function and the ` ...spread `  operator but first we must determine the **Array**  ` index `  of the item we want to remove.

```javascript
// React code but concept applies to JS (vanilla and frameworks)
const reducer = (state, action) => {
  switch (action.type) {
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: [
          ...state.basket?.slice(0, getIndex(state.basket, action.id)),
          ...state.basket?.slice(getIndex(state.basket, action.id)+1)
        ]
      }

      default:
        return {
          ...state,
        }
      }
    };

// note: we can chain ` array.indexOf() ` to ` array.map() ` because ` map ` returns an array; we could not chain another array function after ` indexOf ` because its return is a numeric value
const getIndex = (basket, id) => basket?.map(item => item.id).indexOf(id);
```

- 'REMOVE_FROM_BASKET' is the action type
- ` ...state `  returns the current state
- modify the  ` state.basket `  array property; 
  - before we modify the  ` basket `  we must find the  ` index `  of the item to remove
  - since this is an array of objects we use  ` array.map() `  to return an array that only contains the  ` id `  property of each object in the array
  - since we are now dealing with a one-dimensional array of  ` id `  values (which are in the exact same order that their objects were in -- result of using  ` array.map() `  function) we now have the  ` index `  (array location) of the object to remove.
- use the JS  ` ...spread `  operator to create a new array that contains all the objects before the item deleted as well as all the items (if any) that come after the item that is being deleted



