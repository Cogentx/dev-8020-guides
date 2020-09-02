# JavaScript Arrays

## Array Gotchas

### Nested Arrays

In nested arrays (arrays within arrays), check for existance of first value before trying to access the second.

```javascript
    // center - horizontal
    if (variation === this.grid[row][col - 1] &&
      variation === this.grid[row][col + 1]) {
      isChained = true;
    }

    // center - vertical
    // First IF makes sure both [row +/- 1] exist
    // otherwise we will get an error
    if (this.grid[row - 1] && this.grid[row + 1]) {
      if (variation === this.grid[row - 1][col] &&
        variation === this.grid[row + 1][col]) {
        isChained = true;
      }
    }
```

**Note:** For **CENTER-vertical** we are trying to access a nested property in JavaScript. Therefore, you will need to ensure that the properties up to the nested value exist, otherwise you will get an error. 

**Note:** For **CENTER-horizontal** there is no need for the extra check because `[row]` comes first and will always exist. It is when you have +/- that you need to make sure but only if in first position like `[row]`. If `[col-1]` does not exist it will be undefined and therefore FALSE but won't throw an error.

### Loop Through Array Backwards


