# React Styles in JSX

## Inline Styles

### Directly Apply CSS

Notice that inline styles in JSX are enclosed in double curly braces.

- attributes and values are separated by colon (:)
- multiple attributes are separated by commas (,)
- colors (such as red) are enclosed in quotes (" or ' or `)
- background color is written as **backgroundColor** because its in JS

```javascript
import PropTypes from 'prop-types'

export default function Header({title}) {
  return (
    <header>
      <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'React'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
```

### Use Variable to apply CSS

Notice variable **headingStyle** is pass like prop to **style** inside a single set of curly braces.

Notice the variable **headingStyle** is just a regular object.

```javascript
import PropTypes from 'prop-types'

export default function Header({title}) {
  return (
    <header>
      <h1 style={headingStyle}>{title}</h1>
    </header>
  )
}

const headingStyle = {
  color: "red", 
  backgroundColor: 'black'
};


Header.defaultProps = {
  title: 'React'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}
```

### Use Dynamic ClassList to change Style

Set **className** equal to curly braces. Inside braces use backticks to setup JS template literal syntax. Use ternary operator ( ? ) to apply class (as a string) if **reminder** is true or empty string if not true.

```javascript
import {FaTimes} from 'react-icons/fa';

export default function Task({task, onDelete, onToggle}) {

  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3 key={task.id}>
        {task.name} 
         <FaTimes 
           style={{color: 'red', cursor:'pointer'}}
           onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.date}</p>
      
    </div>
  )
}
```


