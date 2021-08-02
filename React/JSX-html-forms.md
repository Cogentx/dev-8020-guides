# React 80/20 Guide

## HTML Forms inside JSX

### How to get the Value of a Checkbox

Returns boolean value (true if checked) from the element that raised the event (such as 'onChange').
This is a property on the element that raised the event which is a property on the event named 'currentTarget'.

```javascript
import {useState} from 'react';

export default function AddTask() {

  const [reminder, setReminder] = useState(false);

  return (
    <form className="add-form">
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input 
          name="reminder" type="checkbox" 
          value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
    </form>
  )
}
```

