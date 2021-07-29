import React, { useState } from 'react'
import Todo from './Components/TodoItem.js'
import CreateInput from './Components/CreateInput.js'

import './App.css'

function App(props) {
  const [tasks, setTask] = useState(props.tasks)
  const addTask = (text) => {
    setTask([...tasks, { text }])
  }
  const taskList = tasks.map((task, key) => <Todo key={key} text={task.text} />)

  return (
    <div className="App-container">
      <section className="text-center">
        <h2 className="mb-2">To Do</h2>
        <div>
          <CreateInput tasks={tasks} setTask={addTask} />
        </div>
      </section>
      <section className="my-2">
        { taskList }
      </section>
    </div>
  );
}

export default App;
