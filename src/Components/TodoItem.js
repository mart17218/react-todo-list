import { Checkbox, FormControlLabel, withStyles } from '@material-ui/core'

function Todo (props) {
  const WhiteCheckbox = withStyles({
    root: {
      color: '#fff'
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />)
  const changeHandler = () => {}

  return (
    <div>
      <FormControlLabel
        control={<WhiteCheckbox onChange={changeHandler} name="checkedA" />}
        label={props.text}
      />
    </div>
  )
}

export default Todo