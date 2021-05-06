# 80-20 Guide to CSS

## CSS - Cascading Style Sheets

The **look** and **layout** of websites

CSS, together HTML and JS, form the **building blocks of the web**

Makes the web look good - makes the content more interesting!

It's all about **STYLE**!!!

### CSS Formatting Context

Everything on a page is part of a formatting context, or an area which has been defined to lay out content in a particular way.

Flexbox and Grid create their own formatting context.

This is why margin-top and margin-bottom collapse between elements when not inside a flex or grid.

Even a small gap between elements (1px of padding-top; not a great idea because people coming behind you may not understand why you have the padding)

The best way to add consistency is to use a `display: flow-root;` which basically sets a new formatting context so the problems with margin-collapsing inside formatting contexts (when not flex/grid).

#### The Best Way...

## Sub-Selectors in CSS

Selects every element within a block except the first one

```xhtml

```

```css
.flow > * + * {
  margin-top: 1em;
}
```


