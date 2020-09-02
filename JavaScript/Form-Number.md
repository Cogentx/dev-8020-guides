# JavaScript Forms

## Number Fields

### Problem

When Form is submitted the **Number** will actually be submitted as a **String**

### Solution

There are lots of solutions for converting a text value to a number.

These include:
- in the ` onChange ` handler for the ` Form ` wrap the HTML value ( ` e.target.value ` ) in the ` Number() ` function as in ` Number(e.target.value) `
- if building an object to pass a payload ` onSubmit ` simply put a ` + ` sign directly in front of the value amount inside the object. For example if your number field was called **amount** your object could be ` { text: 'phone', price: +amount} `


