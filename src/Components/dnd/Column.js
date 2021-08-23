import { useDrop } from 'react-dnd'

import DraggableTask from './DraggableTask.js'
import { dragType } from 'assets/constants/index.js'

const Column = (props) => {
  const [{}, dropRef] = useDrop({
    accept: dragType.TODO,
    drop: item => {
      const from = item
      const to = { columnIndex: props.id }

      props.moveHandler(from, to)
    },
    canDrop: item => {
      return item.id !== props.id
    }
  })

  return (
    <div ref={dropRef}>
      <DraggableTask {...props} />
    </div>
  )
}

export default Column
