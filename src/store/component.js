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
import Table from '../func/form-table/component'
import Text from '../func/form-text/component'

const _list1 = [
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
  Table,
  // Button,

];
const _list2 = [ Divider, Text, Html, Javascript ];
const obj = {
  labelWidth: 120,
  width: 24,
  widthRatio: 100,
  labelTextAlign: 'right',
  required: false,
  disabled: false,
  regular: '',
  className: '',
  version: process.env.pkg.version,
  reg: false,
}
const changeList = [
  'title', 'width', 'key', 'className'
]

const list1 = _list1.map (item => {
  return { ...obj, ...item, changeList: [ ...changeList, ...item.changeList ] }
})
const list2 = _list2.map (item => {
  return { ...obj, ...item, changeList: [ ...changeList, ...item.changeList ] }
})
const list = [ ...list1, ...list2 ]
const store = {
  namespaced: true,
  state: {
    list,
  },
  mutations: {}
};
export default store
