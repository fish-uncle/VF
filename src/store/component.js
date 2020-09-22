import Input from '../func/form-input/component'
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
  Table,
  Table2,
  // Button,

];
const _list2 = [Divider, DynamicText, Html, Javascript];
const _list3 = [Diy];
const obj = {
  labelWidth: 120,
  width: 12,
  widthRatio: 100,
  labelTextAlign: 'right',
  disabled: false,
  className: '',
  props: {},
  version: process.env.pkg.version,
}
let changeList = {}
const _changeList = [
  'title', 'width', 'key', 'className', 'group'
]

const list1 = _list1.map(item => {
  changeList[item.type] = [..._changeList, ...item.changeList]
  return {...obj, ...item, componentType: 'base', changeList: [..._changeList, ...item.changeList]}
})
const list2 = _list2.map(item => {
  changeList[item.type] = [..._changeList, ...item.changeList]
  return {...obj, ...item, componentType: 'modification', changeList: [..._changeList, ...item.changeList]}
})
const list3 = _list3.map(item => {
  changeList[item.type] = [..._changeList, ...item.changeList]
  return {...obj, ...item, componentType: 'senior', changeList: [..._changeList, ...item.changeList]}
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
