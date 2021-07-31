# React

## How to Delete an item from List

App Component (App.js file):

```javascript
  const [tasks, setTasks] = useState(mockTasks);
  
// Delete Task
  const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      {
        tasks.length > 0 ? 
          <Tasks tasks={tasks} onDelete={deleteTask} /> :
          'No Tasks'
      }
    </div>
  );
}

export default App;
```

Tasks Component (Tasks.js file):

```javascript
import Task from './Task';

export default function Tasks({tasks, onDelete}) {

  return (
    <>
      {tasks.map((task) => 
          <Task 
            key={task.id} 
            task={task}
            onDelete={onDelete}/>)}
    </>
  )
}
```

Task Component (Task.js file):

```javascript
import {FaTimes} from 'react-icons/fa';

export default function Task({task, onDelete}) {
  return (
    <div className="task">
      <h3 key={task.id} className="task">
        {task.name} 
         <FaTimes 
           style={{color: 'red', cursor:'pointer'}}
           onClick={() => onDelete(task.id)}/>
      </h3>
      <p>{task.date} <span className="reminder">{task.reminder}</span></p>
      
    </div>
  )
}
```


