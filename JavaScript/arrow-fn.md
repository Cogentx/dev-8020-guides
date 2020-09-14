# Arrow Functions

## Passing empty parameters

### Order of Arguments Matter (first argument empty?)

**Challenge**:  You are using  ` Array.map `  and you need to pass the index which is the second argument to the  ` arrow `  function.

**Solution**:

Use a  ` _ `  as the first argument to represent passing nothing

```javascript
Array(rating).fill().map((_, i) => (
  <span key={i} role="img" aria-label="star rating">⭐</span>
));
```
