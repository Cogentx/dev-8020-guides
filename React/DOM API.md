# React

## DOM API

###  Input Field Value

Any time you use **value** as a property to an **Input** you must also have an **unchange** handler

Inside JSX...

```javascript
      <input
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        // ref={type.inputComponent}
      />
```

Note: Even if you have a **type of number** it still comes in as a **String** so to get a true number, in the JS code wrap it with the Number function

`Number(value)`

