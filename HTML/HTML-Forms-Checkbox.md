# HTML 80/20 Guide

## HTML Forms

### How to get HTML Checkbox value from JavaScript

To find out if a **HTML Checkbox** is **checked** or not we access the **checked** property from the HTML element.

```javascript
/* 
Returns boolean value (true if checked) 
from the element that raised the event (such as 'click' or 'change').
This is a property on the element that raised the event which is a property on the event named 'currentTarget'
*/
let checked = event.currentTarget.checked
```

