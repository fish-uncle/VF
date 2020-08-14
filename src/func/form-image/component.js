const component = {
  title_zh: '图片',
  title_en: 'image',
  icon: 'ios-image-outline',
  className: '',
  version: '1.0.0',
  componentType: 'base',
  type: 'image',
  dataType: 'Array',
  h: 3,
  disabled: false,
  action: 'https://cdn.shenzhepei.com/VF/upload.json',
  maxSize: 2048,
  labelWidth: 100,
  widthRatio: 100,
  fileFormat: 'jpg,jpeg,png',
  fileAccept: 'image/*',
  labelTextAlign: 'right',
  defaultList: [],
  required: false,
  changeList: [
    'title',
    'labelTextAlign',
    'labelWidth',
    'widthRatio',
    'width',
    'maxSize',
    'action',
    'fileFormat',
    'fileAccept',

    'key',
    'disabled',
    'required',
  ]
}

export default component
