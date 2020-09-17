const store = {
  namespaced: true,
  state: {
    list: [ [], [] ],
    labelWidth: 120,
    labelTextAlign: 'right',
    viewScale: '12:12',
    currentScale: 0,
    current: 0,
    multiFormId: 'form0',
    multiForm: [
      {
        name: '未命名表单1',
        key: 'form0'
      }
    ],
    isChange: false
  },
  mutations: {
    // 修改宽度
    labelWidthChange (state, newState) {
      state.labelWidth = newState.labelWidth
    },
    // 修改对齐
    labelTextAlignChange (state, newState) {
      state.labelTextAlign = newState.labelTextAlign
    },
    // 删除表单
    multiFormChangeDel (state, newState) {
      const multiForm = state.multiForm
      multiForm.splice (newState.index, 1)
      state.multiForm = multiForm
    },
    // 新增表单
    multiFormChangeAdd (state, newState) {
      const multiForm = state.multiForm
      multiForm.push ({
        key: `${newState.key}`,
        name: `未命名表单${newState.key}`
      })
    },
    // 修改表单名称
    multiFormChangeName (state, newState) {
      const multiForm = state.multiForm
      multiForm[newState.index].name = newState.value
      state.multiForm = multiForm
    },
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
    // 选中当前组件
    choose (state, newState) {
      state.current = newState.index
    },
    // 设置组件
    set (state, newState) {
      state.list = newState.list
      state.viewScale = newState.viewScale
    },
    // 清空组件
    clear (state) {
      const viewScale = state.viewScale.split (':')
      const list = []
      viewScale.forEach (() => {
        list.push ([])
      })
      state.list = list
      state.current = 0
    },
    // 移除一个组件
    remove (state, newState) {
      const list = state.list[state.currentScale]
      list.splice (newState.index, 1)
      state.list[state.currentScale] = list
      state.isChange = true
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
    }
  }
}
export default store
