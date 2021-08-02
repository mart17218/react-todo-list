import { Checkbox, withStyles } from '@material-ui/core'

function GrayCheckbox (props) {
  const GrayCheckbox = withStyles({
    root: {
      color: 'rgba(17, 24, 39)'
    },
    checked: {},
  })((style) => <Checkbox color="default" {...style} {...props} />)

  return (<GrayCheckbox />)
}

export default GrayCheckbox
