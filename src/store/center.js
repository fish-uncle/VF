const store = {
  namespaced: true,
  state: {
    list: [ [], [] ],
    labelWidth: 120,
    labelTextAlign: 'right',
    viewScale: '24:0',
    currentScale: 0,
    current: 0,
    multiFormId: 'form0',
    group: [
      {
        color: 'rgba(255,255,255,0)',
        key: 'test',
        id: 'group0',
      }
    ],
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
    // 删除表单
    groupChangeDel (state, newState) {
      const group = state.group
      group.splice (newState.index, 1)
      state.group = group
    },
    // 新增表单
    groupChangeAdd (state, newState) {
      const group = state.group
      group.push ({
        id: newState.key,
        key: newState.key,
        color: 'rgba(255,255,255,0)'
      })
    },
    // 新增表单
    multiFormChangeAdd (state, newState) {
      const multiForm = state.multiForm
      multiForm.push ({
        key: newState.key,
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
      if (newState.viewScale) {
        state.viewScale = newState.viewScale
      }
      if (newState.labelWidth) {
        state.labelWidth = newState.labelWidth
      }
      if (newState.labelTextAlign) {
        state.labelTextAlign = newState.labelTextAlign
      }
      if (newState.group) {
        state.group = newState.group
      }
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
          if (item.key === newState.key) {
            item.ajaxList = newState.value
          }
        })
      })
      state.list = list
    },
    // 修改
    changeKey (state, newState) {
      const list = state.list
      list.forEach (child => {
        child.forEach (item => {
          if (item.id === newState.id) {
            item.key = newState.key
          }
        })
      })
      state.list = list
    }
  }
}
export default store
