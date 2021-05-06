# JavaScript

## Optional-Chaining ( ?. )

The Optional-Chaining **operator** ( ?. ) 

Can deeply nest... ensures that the object to the left of the ` ?. ` exists. If not, no error is thrown, **undefined** is simply returned.

```javascript
// inside JSX
<SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
```
