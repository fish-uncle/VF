const store = {
  namespaced: true,
  state: {
    list: [],
    current: 0,
    data: {},
    isChange: false
  },
  mutations: {
    // 冒泡排序
    sort: function (state, newState) {
      const list = state.list;
      for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
          if (list[j].y > list[j + 1].y) {
            //把大的数字放到后面
            const swap = list[j];
            list[j] = list[j + 1];
            list[j + 1] = swap;
          }
        }
      }
    },
    // 新加一个组件
    add: function (state, newState) {
      let h = 0;
      state.list.forEach(item => {
        h += item.h
      })
      const i = Math.random(5).toString(32).replace('0.', '');
      const l = Math.random(5).toString(32).replace('0.', '')
      let key = `${newState.dragItem.type}_${i}`;
      if (newState.dragItem.type === 'dateRange') {
        key += `;${l}`;
      }
      let newList = {
        x: 0,
        w: 2,
        lowerVersion: false,
        h: newState.dragItem.h,
        y: h,
        i,
        index: state.list.length,
      }
      newList = {
        ...newList,
        dragItem: {
          ...newState.dragItem,
          key, id: key,
        }
      };
      const data = state.data;
      switch (newState.dragItem.type) {
        case 'switch':
          data[key] = false;
          break;
        case 'divider':
          break;
        case 'multiple':
          data[key] = [];
          break;
        case 'dateRange':
          data[key.replace(`;${l}`, '')] = '';
          data[l] = '';
          break;
        default:
          data[key] = '';
      }
      state.data = data;
      state.isChange = true;
      state.list = [...state.list, newList];
    },
    // 选中当前组件
    choose: function (state, newState) {
      state.current = newState.index
    },
    // 清空组件
    clear: function (state) {
      state.list = [];
      state.data = {};
      state.current = 0;
    },
    // 移除一个组件
    remove: function (state, newState) {
      const list = state.list;
      const data = state.data;
      delete data[list[newState.index].dragItem.key]
      list.splice(newState.index, 1);
      state.list = list;
      state.data = data;
      state.isChange = true;
    },
    // 更改值
    changeData: function (state, newState) {
      const data = state.data;
      data[newState.key] = newState.value;
      state.data = data;
    },
    // 更改 类型为 日期范围的值
    changeDateRange: function (state, newState) {
      const data = state.data;
      const key = newState.key.split(';');
      data[key[0]] = newState.value[0];
      data[key[1]] = newState.value[1];
      state.data = data;
    },
    // 更改值 数组
    changeDataArray: function (state, newState) {
      let data = state.data;
      if (data[newState.key].indexOf(newState.value) === -1) {
        data[newState.key] = [...data[newState.key], newState.value]
      } else {
        for (let i = 0; i < data[newState.key].length; i++) {
          if (data[newState.key][i] == newState.value) {
            data[newState.key].splice(i, 1);
            break;
          }
        }
      }
      state.data = data;
    }
  }
};
export default store
