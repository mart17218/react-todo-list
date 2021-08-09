import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import TodoColumn from './Components/dnd/Column.js'
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
  const moveTask = (from, to) => {
    const newTasks = [...tasks]
    const movedTask = tasks[from.id]

    newTasks.splice(from.id, 1)
    newTasks.splice(to.columnIndex, 0, movedTask)
    setTask(newTasks)
  }
  const taskList = tasks.map((task, key) =>
    <TodoColumn
      className="mb-2"
      key={key}
      id={key}
      text={task.text}
      checked={task.checked}
      toggleTask={checkTask}
      deleteTask={removeTask}
      moveHandler={moveTask}
    />
  )

  return (
    <div className="app-container">
      <div className="content-container">
        <section className="px-3 text-center">
          <h2 className="font-medium text-left tracking-wide mb-4">To Do</h2>
          <div>
            <CreateInput tasks={tasks} setTask={addTask} />
          </div>
        </section>
        <DndProvider backend={HTML5Backend}>
          <section className="task-container my-4">
              { taskList }
          </section>
        </DndProvider>
      </div>
    </div>
  );
}

export default App
