import Input from '../func/form-input/component'
import Textarea from '../func/form-textarea/component'
import Switch from '../func/form-switch/component'
import Radio from '../func/form-radio/component'
import Select from '../func/form-select/component'
import Multiple from '../func/form-multiple/component'
import Password from '../func/form-password/component'
import Javascript from '../func/form-javascript/component'
import Html from '../func/form-html/component'
import TimePicker from '../func/form-timePicker/component'
import TimeRange from '../func/form-timeRange/component'
import Image from '../func/form-image/component'
import DateRange from '../func/form-dateRange/component'
import DatePicker from '../func/form-datePicker/component'
import Rate from '../func/form-rate/component'
import Slider from '../func/form-slider/component'
import ColorPicker from '../func/form-colorPicker/component'
import Divider from '../func/form-divider/component'
import Button from '../func/form-button/component'

const xStart = 0; // 起始 x 轴
const yStart1 = 80; // 基础组件 起始 y 轴
const yStart2 = 120; // 修饰组件 起始 y 轴
const width = 108; // 拖动块宽度
const height = 30; // 拖动块高度
const yStep = 40; // 拖动块间隔高度
const xStep = 118; // 拖动块间隔宽度
const list1 = [
  Input,
  Textarea,
  Password,
  Switch,
  Radio,
  Select,
  Multiple,
  Rate,
  DatePicker,
  DateRange,
  TimePicker,
  TimeRange,
  Slider,
  Image,
  ColorPicker,
  Button,

];
const list2 = [Divider, Html, Javascript];
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
