import { FormControlLabel, IconButton } from '@material-ui/core'
import { CheckCircleOutline, DeleteOutlined, RadioButtonUnchecked } from '@material-ui/icons'

import GrayCheckbox from './material-ui/GrayCheckbox'

function Todo (props) {
  const changeHandler = () => {
    props.toggleTask(props.id)
  }
  const deleteItem = () => {
    props.deleteTask(props.id)
  }
  const todoItem =
    <GrayCheckbox
      checked={props.checked}
      icon={<RadioButtonUnchecked />}
      checkedIcon={<CheckCircleOutline />}
      onChange={changeHandler}
    />

  return (
    <div className={`border border-gray-900 bg-white flex items-center justify-between rounded text-gray-900 ${props.className}`}>
      <FormControlLabel
        control={todoItem}
        label={props.text}
        className="break-all px-4"
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteOutlined style={{ color: '#111827' }} />
      </IconButton>
    </div>
  )
}

export default Todo