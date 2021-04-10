# CSS

## Browser Support Backup

### with CSS variables

Put the CSS test inside the parens. Browser tries to run and if it fails then the code inside the curly brackets is run.

```css
  /* CSS browser backup for not supported */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  /* take your row sizing not from parent but from grandparent */
    /* CSS variables use -- inside var() if first don't exist (--rows variable) use second (subgrid) */
  grid-template-rows: var(--rows, subgrid);
```
