# 80-20-Guide to CSS

## Media Queries

### Websites are responsive by default

Therefore, use **Media Queries** to account for complexity for larger screen sizes (viewports) where you have more going on.

Media Queries can set new CSS rules or override existing ones.

### How To Write a Media Query

Start with **@Media** followed by parens and block fenced by curly braces to write the CSS rules:

```css
@Media(min-width: 600px) {
  /* mobile first 
  - when the width is >= 600px these rules are applied
  */
}

@Media(max-width: 600px) {
  /* desktop first 
  - when the width is <= 600px then these rules are applied
  */
}
```

**Note:** in CSS, the last rule wins... this also applies to Media Queries so make sure the Media Query follows the rules you want to change; including following other media queries that may change these same rules!

### Going Beyond Widths

Media Queries can be used for other things as well including:

```css
@media(orientation: landscape) {
  /* target device orientation */
}
@media(orientation: portrait) {
  /* apply rule when true */
}
@media screen and (orientation: landscape) {
  /* target only screens */
}
@media print and (orientation: portrait) {
  /* target only when printing */
  
}
```

### References

[Kevin Powell | YouTube](https://youtu.be/2KL-z9A56SQ)

[@media - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media)

[Using Media Queries | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)

[CSS Media Queries & Using Available Space | CSS Tricks ](https://css-tricks.com/css-media-queries/)

