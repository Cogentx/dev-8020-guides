# INTL

## Format Money

```javascript
const formatMoney = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
}).format;
```

Then wrap value in FormatMoney inside JSX

```javascript
      <h2>
        {type.title} - {value && formatMoney(value / 100)}
      </h2>
```
