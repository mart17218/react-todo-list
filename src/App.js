import React, { useState } from 'react'
import Todo from './Components/TodoItem.js'
import CreateInput from './Components/CreateInput.js'

import './App.scss'

function App(props) {
  const [tasks, setTask] = useState(props.tasks)
  const addTask = (text) => {
    setTask([...tasks, { text, checked: false }])
  }
  const removeTask = (index) => {
    const newTasks = tasks.filter((t, key) => key !== index)
    setTask(newTasks)
  }
  const checkTask = (index) => {
    const newTasks = tasks.map((task, key) => {
      if (key === index) {
        return { ...task, checked: !task.checked }
      }
      return task
    })
    setTask(newTasks)
  }
  const taskList = tasks.map((task, key) =>
    <Todo
      className="mb-2"
      key={key}
      id={key}
      text={task.text}
      checked={task.checked}
      toggleTask={checkTask}
      deleteTask={removeTask}
    />
  )

  return (
    <div className="app-container">
      <div className="content-container">
        <section className="px-3 text-center">
          <h2 className="text-left mb-4">To Do</h2>
          <div>
            <CreateInput tasks={tasks} setTask={addTask} />
          </div>
        </section>
        <section className="task-container my-4">
          { taskList }
        </section>
      </div>
    </div>
  );
}

export default App
