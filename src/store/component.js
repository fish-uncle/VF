import Input from '../func/form-input/component'
import Title from '../func/form-title/component'
// import Input2 from '../func/form-input2/component'
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
// import Button from '../func/form-button/component'
import Table from '../func/form-table/component'
import Table2 from '../func/form-table2/component'
import DynamicText from '../func/form-dynamicText/component'
import Diy from '../func/form-diy/component'

const _list1 = [
  Input,
  Textarea,
  Password,
  // Input2,
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
  // Button,

];
const _list2 = [Divider, DynamicText, Html, Javascript, Title];
const _list3 = [Table, Table2, Diy];
const obj1 = {
  labelWidth: 120,
  width: 12,
  widthRatio: 100,
  labelTextAlign: 'right',
  disabled: false,
  className: '',
  props: {},
  required: false,
  rules: '{\'pattern\': \'\',\'message\': \'该项格式不正确\'}',
  events: {
    onChange: '',
    onHide: '',
    onShow: '',
    onUpdate: '',
  },
  version: process.env.pkg.version,
}
const obj2 = {
  labelWidth: 120,
  width: 12,
  widthRatio: 100,
  labelTextAlign: 'right',
  className: '',
  dataType: 'Null',
  version: process.env.pkg.version,
}
const obj3 = {
  labelWidth: 120,
  width: 12,
  widthRatio: 100,
  labelTextAlign: 'right',
  className: '',
  props: {},
  events: {
    onHide: '',
    onShow: '',
    onUpdate: '',
  },
  version: process.env.pkg.version,
}
let changeList = {}
const _changeList1 = [
  'labelTextAlign', 'labelWidth', 'widthRatio', 'disabled',
  'title', 'width', 'key', 'className', 'group', 'rules', 'props',
  'events.onChange', 'events.onHide', 'events.onShow', 'events.onUpdate', 'props'
]
const _changeList2 = [
  'width', 'key', 'className', 'group'
]
const _changeList3 = [
  'title', 'width', 'key', 'className', 'group', 'events.onHide', 'events.onShow', 'events.onUpdate',
]

const list1 = _list1.map(item => {
  changeList[item.type] = [..._changeList1, ...item.changeList]
  return {...obj1, ...item, componentType: 'base', changeList: [..._changeList1, ...item.changeList]}
})
const list2 = _list2.map(item => {
  changeList[item.type] = [..._changeList2, ...item.changeList]
  return {...obj2, ...item, componentType: 'modification', changeList: [..._changeList2, ...item.changeList]}
})
const list3 = _list3.map(item => {
  changeList[item.type] = [..._changeList3, ...item.changeList]
  return {...obj3, ...item, componentType: 'senior', changeList: [..._changeList3, ...item.changeList]}
})
const list = [...list1, ...list2, ...list3]
const store = {
  namespaced: true,
  state: {
    list,
    changeList
  },
  mutations: {}
};
export default store
