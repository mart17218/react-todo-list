import React, { useState } from 'react'
import Todo from './Components/TodoItem.js'
import CreateInput from './Components/CreateInput.js'

import './App.scss'

function App(props) {
  const [tasks, setTask] = useState(props.tasks)
  const addTask = (text) => {
    setTask([...tasks, { text }])
  }
  const removeTask = (index) => {
    const newTasks = tasks.filter((t, key) => key !== index)
    setTask(newTasks)
  }
  const taskList = tasks.map((task, key) =>
    <Todo className="mb-2" key={key} id={key} text={task.text} deleteTask={removeTask} />
  )

  return (
    <div className="app-container">
      <div className="content-container" style={{ width: '280px' }}>
        <section className="text-center">
          <h2 className="text-left mb-4">To Do</h2>
          <div>
            <CreateInput tasks={tasks} setTask={addTask} />
          </div>
        </section>
        <section className="my-4">
          { taskList }
        </section>
      </div>
    </div>
  );
}

export default App;
