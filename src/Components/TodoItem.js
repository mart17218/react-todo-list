import { Checkbox, FormControlLabel, IconButton, withStyles } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'

function Todo (props) {
  const WhiteCheckbox = withStyles({
    root: {
      color: '#fff'
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />)
  const changeHandler = () => {}
  const deleteItem = () => {
    props.deleteTask(props.id)
  }

  return (
    <div className="items-center flex justify-between">
      <FormControlLabel
        control={<WhiteCheckbox onChange={changeHandler} name="checkedA" />}
        label={props.text}
      />
      <IconButton aria-label="delete" onClick={deleteItem}>
        <DeleteOutlined style={{ color: '#fff' }} />
      </IconButton>
    </div>
  )
}

export default Todo