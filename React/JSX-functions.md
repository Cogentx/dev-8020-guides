# React

## Functions in JSX

When using functions within JSX it's important to know that what you are returning is the function itself.

For functions with **no parameters** you can simply return the function **name** with **no parens**.

```javascript
import {useState} from 'react';

export default function AddTask() {

  const [text, setText] = useState('');

  const addTaskName = () => setText('New Task Name');

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="taskText">Task</label>
        <input 
          name="taskText" type="text" placeholder="Add Task" 
          value={text} onChange={addTaskName} />
      </div>
    </form>
  )
}
```

In many cases you will want to pass parameters. This is the case for form above. What we actually want to pass to the **onChange** event handler is the value the user types in the field. Let's refactor to use a parameter and optionally use the **useState** update function directly. Either way, the really point is that we cannot just add parens, such as **addTaskName()** or **setText()** even without passing a paremeter, because the parens cause the function to be immediately executed which causing react crash our app with the following error: **Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.**

This error message will may point an experienced React developer to the issue but would certainly cause a less experienced developer to loose time trying to figure what went wrong where.

The solution is to use an **arrow function** to return the function (with optional parameters) without actually executing it as is shown in the following refactored code block:

```javascript
import {useState} from 'react';

export default function AddTask() {

  const [text, setText] = useState('');

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="taskText">Task</label>
        <input 
          name="taskText" type="text" placeholder="Add Task" 
          value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </form>
  )
}
```

Here we pass the **event** which we've simply called **e** then reference its **target** which is the **html element** that raised the event. We then grab the **value** property from the element and pass it to the **useState** update function **setText(e.target.value)**.

