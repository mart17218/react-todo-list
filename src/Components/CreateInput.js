import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { IconButton, InputBase, Paper } from '@material-ui/core'

import './CreateInput.scss'

function CreateInput (props) {
  const [inputValue, setValue] = useState('')

  const changeHandler = (event) => {
    setValue(event.target.value)
  }
  const createItem = (e) => {
    if (inputValue) {
      props.setTask(inputValue)
      setValue('')
    }
  }

  return (
    <Paper className="flex" elevation={0}>
      <InputBase
        placeholder="write something"
        inputProps={{ 'aria-label': 'add todo', maxLength: 20 }}
        className="create-input flex-1 pl-2"
        onChange={changeHandler}
        value={inputValue}
      />
      <IconButton type="submit" aria-label="add" onClick={createItem}>
        <AddIcon classes={{ root: 'text-gray-900' }} />
      </IconButton>
    </Paper>
  )
}

export default CreateInput