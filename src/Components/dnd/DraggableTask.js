import { useDrag } from 'react-dnd'

import Todo from '../TodoItem.js'
import { dragType } from 'assets/constants/index.js'

const DraggableTask = (props) => {
  const [{}, dragRef] = useDrag({
    type: dragType.TODO, 
    item: { id: props.id }
  })

  return (
    <div ref={dragRef}>
      <Todo {...props} />
    </div>
  )
}

export default DraggableTask
