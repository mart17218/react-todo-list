import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add'
import { IconButton, InputBase, Paper } from '@material-ui/core'

function CreateInput (props) {
  const [inputValue, setValue] = useState('')

  const changeHandler = (event) => {
    setValue(event.target.value)
  }
  const createItem = (e) => {
    props.setTask(inputValue)
    setValue('')
  }

  return (
    <Paper className="flex">
      <InputBase
        placeholder="write something"
        inputProps={{ 'aria-label': 'add todo' }}
        className="flex-1 pl-2"
        onChange={changeHandler}
        value={inputValue}
      />
      <IconButton type="submit" aria-label="add" onClick={createItem}>
        <AddIcon />
      </IconButton>
    </Paper>
  )
}

export default CreateInput