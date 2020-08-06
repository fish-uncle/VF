import Input from '../components/form-input/component'
import Textarea from '../components/form-textarea/component'
import Switch from '../components/form-switch/component'
import Radio from '../components/form-radio/component'
import Select from '../components/form-select/component'
import Multiple from '../components/form-multiple/component'
// import Image from '../components/form-image/component'
import DateRange from '../components/form-dateRange/component'
import DatePicker from '../components/form-datePicker/component'
import Rate from '../components/form-rate/component'
import Slider from '../components/form-slider/component'
import ColorPicker from '../components/form-colorPicker/component'
import Divider from '../components/form-divider/component'

const xStart = 0; // 起始 x 轴
const yStart1 = 0; // 基础组件 起始 y 轴
const yStart2 = 40; // 修饰组件 起始 y 轴
const width = 108; // 拖动块宽度
const height = 30; // 拖动块高度
const yStep = 40; // 拖动块间隔高度
const xStep = 118; // 拖动块间隔宽度
const list1 = [
  Input,
  Textarea,
  Switch,
  Radio,
  Select,
  Multiple,
  // Image,
  DateRange,
  DatePicker,
  Rate,
  Slider,
  ColorPicker,
];
const list2 = [Divider];
list1.forEach((item, index) => {
  item.xStart = xStart + index % 2 * xStep
  item.xEnd = xStart + width + index % 2 * xStep
  item.yStart = yStart1 + parseInt(index / 2) * yStep
  item.yEnd = yStart1 + height + parseInt(index / 2) * yStep
})
list2.forEach((item, index) => {
  item.xStart = xStart + index % 2 * xStep
  item.xEnd = xStart + width + index % 2 * xStep
  item.yStart = yStart2 + parseInt(index / 2) * yStep + Math.ceil(list1.length / 2) * yStep
  item.yEnd = yStart2 + height + parseInt(index / 2) * yStep + Math.ceil(list1.length / 2) * yStep
})
const list = [...list1, ...list2]
;
const store = {
  namespaced: true,
  state: {
    list,
    drag: false,
    remove: false,
    dragItem: {}
  },
  mutations: {
    drag: function (state, newState) {
      state.drag = true;
      state.dragItem = newState.dragItem;
    },
    remove: function (state) {
      state.remove = true;
      state.drag = false;
      state.dragItem = {
        ...state.dragItem,
        x: state.dragItem.xStart,
        y: state.dragItem.yStart
      };
      setTimeout(() => {
        state.remove = false;
      }, 300);
    }
  }
};
export default store
