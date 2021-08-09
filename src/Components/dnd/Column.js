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
    canDrop: (item) => {
      // TODO: 排除移動前後位置相同的情形
      return true
    }
  })

  return (
    <div ref={dropRef}>
      <DraggableTask {...props} />
    </div>
  )
}

export default Column
