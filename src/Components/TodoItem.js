import { FormControlLabel, IconButton } from '@material-ui/core'
import { CheckCircleOutline, DeleteOutlined, RadioButtonUnchecked } from '@material-ui/icons'

import GrayCheckbox from './material-ui/GrayCheckbox'

function Todo (props) {
  const changeHandler = () => {}
  const deleteItem = () => {
    props.deleteTask(props.id)
  }

  return (
    <div className={`bg-white flex items-center justify-between rounded-sm text-gray-900 ${props.className}`}>
      <FormControlLabel
        control={<GrayCheckbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircleOutline />} onChange={changeHandler} name="checkedA" />}
        label={props.text}
        className="px-4"
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteOutlined style={{ color: '#fff' }} />
      </IconButton>
    </div>
  )
}

export default Todo