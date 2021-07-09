# 80-20 Guide to Modern JavaScript

## JavaScript Loops

### Arrays - .forEach()


### Arrays - for()

If you need to **return**, using **.forEach()** would create another scope (inner) that does not allow us to **return** from the outer scope.

In the case where you need to **return** while the **loop** is being process it is better to use a **for loop**.

Which one?

**.forEach** loops all with no valid option to return in the middle.

**for loop** not only allows you to loop over any iterable but it also allows you to interrupt the loop at any time based on a condition you define. You can use **break, throw, or return**.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>


