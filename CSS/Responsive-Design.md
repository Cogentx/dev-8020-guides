# 80-20-Guide to CSS

## Responsive Design

### Websites are responsive by default

This is an important to establish the right mindset for debugging a layout issue... since the website is responsive by default, the only way to break this responsiveness is with code.

Watch CSS Expert, [Kevin Powell explain](https://youtu.be/VQraviuwbzU?t=104)

### Start Global First - not Layout

Write the global CSS for typography, font, colors, backgrounds

### Avoid Fixed Sizes

Setting a FIXED width and height, such as using pixels, is only going to cause you problems.

- use REM or EM mostly; sometimes as in images use percent
- if you need pixels use **max-width** instead of **width**
- never set fixed heights; if you need **height** use **min-height**


### Use Media Queries to Add Complexity

Instead of using **media queries** to override a bunch of properties set previously; move that complexity inside a media query and reverse the actual media query. For example, using columns in larger viewports.

Don't do this:

```css
.split {
  display: flex;
  gap: 1em;
}

@media (max-width: 40em) {
  .split {
    display: block;
  }
}
```

Bring the desired result of splitting into columns at larger sizes into the media query

```css

@media (min-width: 40em) {
  .split {
    display: flex;
    gap: 1em;
  }
}
```

This is an example of mobile first which is good because the complexity tends to get added as the screen size increases.

Add media query **break points** at the places where you layout **starts to break**. When columns seem too wide or too narrow

Avoid too many breakpoints. Try to keep to two; round up and round down as necessary when making design decisions.

Avoid having device-specific breakpoints - way too many devices now.

Avoid having too many exact screen sizes; again too many devices; round design requirements to fit within one or two breakpoints.

### Use Modern CSS (e.g clamp)

With modern CSS and intrinsic design techniques there is less of a need for breakpoints.

```css
h1 {
  font-size: clamp(2rem, 1rem + 1vw, 5rem);
  padding: clamp(2rem, 1rem + 1vw, 5rem);
}
```




