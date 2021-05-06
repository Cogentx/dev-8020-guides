# INTL

## Format Money

**Intl.NumberFormat** is built-in to browsers as well as **nodeJS** to help format currency.

The 'en-CA' tells the formatter where to put the commas and decimals.

The 'CAD' tells the formatter how to format the money for this country's currency (such as '$' for USD and CAD).

```javascript
const formatter = Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
```

## Format Money inside JSX

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
