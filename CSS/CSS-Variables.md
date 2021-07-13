# CSS-Variables

## Define and Use in CSS

Define at any level. `:root` is the highest level meaning everything has access to it. Use the variable in child elements.

Note: unlike SCSS variables, which are determined at build time and cannot be changed, CSS variables can be changed using JS at run-time providing a much more powerful affect.

```css
:root {
  --base: #ffc500;
  --spacing: 10px;
  --blur: 10px;
}

img {
  background-color: var(--base);
  padding: var(--spacing);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

## Access and Update in JS

From JS, access all **data-** properties using `this.datalist.[data-name]` such as `this.datalist.sizing` if on a HTML Element with **data-sizing**. An object is returned with all **data-** element names.

```javascript
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = `${this.dataset.sizing || ''}`;
  console.log(this.value, suffix);
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

## Order of Precedence of CSS Variables

Much like CSS cascades, tthe value closer to an element wins. For example, set CSS variable value of **--base** from a **style** tag directly (on any element) and any other classes that are children will be based on the **in-line style** value and not the CSS value set elsewhere (including CSS and JS). The example below on **hl class** inside the **h2** illustrates this point.

```html
   <h2 style="--base: #BADA55">Update CSS Variables with <span class="hl">JS</span></h2>
```
Notice the **syntax** for CSS Vars in-line style

![CSS Vars and JS with in-line style precedence](img/07-12-2021-CSS%20Vars%20and%20JS.png)


