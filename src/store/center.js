import { Message } from "view-design";

const store = {
  namespaced: true,
  state: {
    list: [ [], [] ],
    viewScale: '12:12',
    currentScale: 0,
    current: 0,
    data: {},
    isChange: false
  },
  mutations: {
    // 当前视图修改
    currentScaleChange (state, newState) {
      state.currentScale = newState.currentScale
    },
    // 视图修改
    viewScaleChange (state, newState) {
      state.viewScale = newState.viewScale
      // const viewScale = state.viewScale.split (':')
      // const list = []
      // viewScale.forEach ((item, index) => {
      //   if (!state.list[index]) {
      //     state.list[index] = []
      //   }
      // })
      // state.list = list
    },
    // 冒泡排序
    // sort (state, newState) {
    //   const list = state.list[state.currentScale]
    //   for (let i = 0; i < list.length - 1; i++) {
    //     for (let j = 0; j < list.length - i - 1; j++) {
    //       if (list[j].y > list[j + 1].y) {
    //         const swap = list[j]
    //         list[j] = list[j + 1]
    //         list[j + 1] = swap
    //       }
    //     }
    //   }
    // },
    // 新加一个组件
    add (state, newState) {
      if (state.viewScale.split (':')[state.currentScale] === '0') {
        Message.error ('请不要在隐藏视图添加组件')
        return
      }
      if (!state.list[state.currentScale]) {
        state.list[state.currentScale] = []
      }
      let newList = {
        lowerVersion: false,
      }
      newList = {
        ...newList,
        dragItem: {
          ...newState.dragItem,
        }
      }
      state.isChange = true
      state.list[state.currentScale].push (newList)
    },
    // 选中当前组件
    choose (state, newState) {
      state.current = newState.index
    },
    // 清空组件
    clear (state) {
      const viewScale = state.viewScale.split (':')
      const list = []
      viewScale.forEach (() => {
        list.push ([])
      })
      state.list = list
      state.data = {}
      state.current = 0
    },
    // 移除一个组件
    remove (state, newState) {
      const list = state.list[state.currentScale]
      list.splice (newState.index, 1)
      state.list[state.currentScale] = list
      state.isChange = true
    },
    // 更改值
    changeData (state, newState) {
      const data = state.data
      data[newState.key] = newState.value
      state.data = data
    },
    // 初始化 列表
    changeSelectList (state, newState) {
      const list = state.list
      list.forEach (child => {
        child.forEach (item => {
          if (item.dragItem.key === newState.key) {
            item.dragItem.ajaxList = newState.value
          }
        })
      })
      state.list = list
    },
    // 更改 类型为 日期范围的值
    changeDateRange (state, newState) {
      const data = state.data
      const key = newState.key.split ('')
      data[key[0]] = newState.value[0]
      data[key[1]] = newState.value[1]
      state.data = data
    },
    // 更改值 数组
    changeDataArray (state, newState) {
      let data = state.data
      if (data[newState.key].indexOf (newState.value) === -1) {
        data[newState.key] = [ ...data[newState.key], newState.value ]
      } else {
        for (let i = 0; i < data[newState.key].length; i++) {
          if (data[newState.key][i] == newState.value) {
            data[newState.key].splice (i, 1)
            break
          }
        }
      }
      state.data = data
    }
  }
}
export default store
