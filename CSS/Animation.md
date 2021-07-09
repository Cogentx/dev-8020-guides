# CSS Animations

## Includes: Transforms and Events

### TransitionEnd Event

It's important when a duration exists in CSS that it not be duplicated in JS and vice versa. The reason is that it is too easy for the durations to get out of sync. One alternative to setting a JS `setTimeOut()` for example is to use the **transitionend** Event.

```javascript
const keys = document.querySelectorAll('.key');
Array.from(keys).forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

function removeTransition(e) {
  if (e.propertyName !== 'transform')  return; // skip if not transform
  e.target.classList.remove('playing');
}
```


