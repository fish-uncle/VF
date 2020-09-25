import {findComponentUpward} from '../../utils'

export default {
  name: 'slot-render',
  functional: true,
  props: {
    slotName: {
      type: String
    },
    row: {
      type: Object
    },
    rowIndex: {
      type: Number
    }
  },
  render: (h, ctx) => {
    const parent = findComponentUpward(ctx.parent, 'FormList')
    return h('div', {}, parent.$scopedSlots[ctx.props.slotName]({...ctx.props}))
  }
}