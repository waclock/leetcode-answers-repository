import React, { useState } from 'react';
import './App.css';
import { Todo } from './components/Todo';
import { Form } from './components/Form';
import { FilterButton } from './components/FilterButton';


const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

function App() {
  const [tasks, setTasks] = useState(DATA);
  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task;
    });
    setTasks(updatedTasks);
  }
  function deleteTask(id: string) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }
  function addTask(name: string) {
    if(!name) return alert("Name must contain something");
    const newTask = { id: "id", name: name, completed: false };
    setTasks([...tasks, newTask]);
  }
  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return { ...task, name: newName }
      }
      return task;
    });
    setTasks(editedTaskList);
  }
  const taskList = tasks.map(task => (
    <Todo
      editTask={editTask}
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      toggleTaskCompleted={toggleTaskCompleted}
      />
    )
  );
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{`${tasks.length} tasks remaining`}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
