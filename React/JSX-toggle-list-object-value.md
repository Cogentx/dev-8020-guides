# React

## Toggle List Object Value

Map over the array and check if id is equal to id passed in. If so, spread the object and change the reminder field to be the opposite of what is currently in state. If not, just return the **task** onchanged.

```javascript
// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder} : task));
}
```

