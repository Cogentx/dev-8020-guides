# JavaScript

## Wes Bos Hot Tips

### Console Log Multiple things more clearly

If you have more than one thing to console log, you can add clarity to the console by logging the names of each variable being logged -- log variables as an object...

```javascript
// log individual vars
  console.log(toppings, pizzas);
// log vars showing names of variables with accompaning output
  console.log({ toppings, pizzas });
```

**Console Output**:

![WB-HT-console-obj](./../___img/WB-HT-console-obj.png)

### Constantly having to Clear the Console

Insert a `console.clear();`  command in your code just before you start logging so that console only shows your lastest logging.

```javascript
  // clear console before we start logging
  console.clear();
```
