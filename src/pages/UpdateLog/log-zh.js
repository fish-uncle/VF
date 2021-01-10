const log = [
	{
		version: '1.1.9',
		time: '2021-01-10',
		content: [
			'添加 typescript 使用率。',
			'添加 pug。',
			'优化组件引入方式。',
			'优化表单属性引入方式。',
		]
	},
	{
		version: '1.1.8',
		time: '2021-01-09',
		content: [
			'添加 commitlint.',
			'添加 typescript.',
		]
	},
	{
		version: '1.1.7',
		time: '2020-10-19',
		content: [
			'修复平台多个类型组件拖拽，显示异常问题.',
		]
	},
	{
		version: '1.1.6',
		time: '2020-09-30',
		content: [
			'修复平台css样式问题。',
			'日期增加功能是否开启选择时间。',
		]
	},
	{
		version: '1.1.5',
		time: '2020-09-28',
		content: [
			'修复高德地图https加载问题。',
			'修复theme-javascript报错。',
			'修复v-form打包后没有正常引入的问题。',
			'更改启动方式，更大众化。',
			'引入eslint。',
			'webpack打包优化。',
		]
	},
	{
		version: '1.1.4',
		time: '2020-09-25',
		content: [
			'优化高级表格,可添加固定字段，类型为text。',
			'新增高德地图组件 f-amap。',
			'修复全组件部分报错信息。',
			'table修改为vxe-table。',
			'暴露部分插槽slot，引用更好便。',
		]
	},
	{
		version: '1.1.3',
		time: '2020-09-23',
		content: [
			'优化高级表格。',
			'开源代码。',
			'新增自定义组件 f-diy。',
			'完善API处文档。',
			'新增事件文档。',
			'新增校验文档。',
			'发布npm。',
			'修复校验报错bug。',
			'修复高级表格bug。',
			'修复自定义组件报错bug。',
			'添加throttle-debounce 优化事件防抖。',
			'添加支持自定义axios实例。',
		]
	},
	{
		version: '1.1.2',
		time: '2020-09-22',
		content: [
			'新增编辑状态，只读状态。',
			'新增表单统一设置，组件宽度，组件对齐。',
			'修复数据预览问题。',
			'新增自定义props。',
			'新增async-validator包，优化 validate 方法。',
			'新增自定义校验。',
			'修复字段标识修改问题。',
			'新增读取配置。',
			'优化动态文字。',
			'新增分组功能，并可以根据分组获取数据。',
			'新增可以根据隐藏获取数据。',
			'新增高级表格组件 f-table2。',
			'新增组件值改变回调事件。',
			'组件内添加防抖函数。',
			'新增事件配置。',
			'新增标题组件 f-title。',
		]
	},
	{
		version: '1.1.1',
		time: '2020-09-15',
		content: [
			'新增正则校验功能。',
			'修复组件互换位置后报错问题。',
			'优化必填，正则校验的报错收集方法。',
			'优化拖动效果。',
			'新增表单设置。',
		]
	},
	{
		version: '1.1.0',
		time: '2020-09-10',
		content: [
			'优化布局结构，新增1:0,1:1,2:1,1:2方式。',
			'优化动态显隐控制后，组件没有上移的问题。',
			'优化联动算法。',
			'移除新页面预览功能。',
			'新增代码预览功能。',
			'优化帮助文档，第一个示例。',
		]
	},
	{
		version: '1.0.14',
		time: '2020-08-19',
		content: [
			'修改为valine无后端评论系统。',
		]
	},
	{
		version: '1.0.13',
		time: '2020-08-15',
		content: [
			'新增纯文本组件 f-text。',
			'新增表格组件 f-table。',
		]
	},
	{
		version: '1.0.12',
		time: '2020-07-14',
		content: [
			'修复f-javascript组件，部分文字内容没有使用国际化。',
			'优化意见反馈，增加Gitalk留言功能。',
			'优化f-javascript组件，代码输入框。',
			'优化f-html组件，代码输入框。',
			'优化f-divider组件，增加组件宽度表单属性可以控制。',
			'优化f-slider组件，增加组件宽度表单属性可以控制。',
			'新增图片组件 f-image。',
			'新增表单属性功能，整体宽度。',
			'新增布局功能，整体布局采取24分法随意拖动布局。',
			'新增新页面预览。',
			'新增全组件预览。',
		]
	},
	{
		version: '1.0.11',
		time: '2020-06-13',
		content: [
			'新增组件国际化功能。',
			'优化帮助文档，动态数据。',
			'优化帮助文档，快速使用。',
			'新增组件icon标识。',
			'新增密码文本组件 f-password。',
			'新增js片段组件 f-javascript。',
			'新增html片段组件 f-html。',
			'优化组件引入方式，动态引入。',
			'新增时间选择组件 f-timePicker。',
			'新增时间范围组件 f-timeRange。',
			'新增字段属性功能，显示格式化。',
			'新增表单属性功能，自定义class名。',
			'新增方法，verifyRequired，校验必填项。',
		]
	},
	{
		version: '1.0.10',
		time: '2020-05-10',
		content: [
			'优化帮助文档,目录介绍。',
			'优化帮助文档，部分展示效果。',
			'优化导航，部分展示效果。',
			'新增平台及文档国际化功能。',
			'修改导航源码查看为购买。',
		]
	},
	{
		version: '1.0.9',
		time: '2020-04-07',
		content: [
			'新增帮助文档。',
			'优化平台体验。',
			'优化class命名，添加 vf- 前缀。',
			'优化添加loading页。',
			'修复loading页样式异常问题。',
		]
	},
	{
		version: '1.0.8',
		time: '2020-03-06',
		content: [
			'修复颜色选择器组件选择后功能无法使用问题。',
			'优化首页，添加导航。',
			'优化首页，添加更新日志。',
			'优化首页，添加源码查看。',
			'优化分割线组件功能，支持配置是否是虚线。',
			'优化分割线组件功能，隐藏不可修改属性。',
			'修复穿梭框组件样式，部分样式与其他样式覆盖，显示异常。',
		]
	},
	{
		version: '1.0.7',
		time: '2020-02-27',
		content: [
			'修复单项选择组件禁用功能无法使用问题。',
			'优化日期选择组件功能，支持配置是否可以清除值。',
			'优化日期范围组件功能，支持配置是否可以清除值。',
			'优化下拉选择组件功能，支持配置是否可以清除值。',
			'优化星级评分组件功能，支持配置是否可以清除值。',
			'优化UI，添加使用iView-UI。',
		]
	},
	{
		version: '1.0.6',
		time: '2020-01-20',
		content: [
			'优化多项选择组件功能，支持控制其他组件，级联效果。',
			'优化下拉选择组件功能，支持控制其他组件，级联效果。',
			'优化单项选择组件功能，支持控制其他组件，级联效果。',
		]
	},
	{
		version: '1.0.5',
		time: '2019-12-14',
		content: [
			'优化多项选择组件功能，支持动态获取列表。',
			'优化下拉选择组件功能，支持动态获取列表。',
			'优化单项选择组件功能，支持动态获取列表。',
		]
	},
	{
		version: '1.0.4',
		time: '2019-11-10',
		content: [
			'优化组件排序功能。',
			'新增修饰组件 分割线组件。',
		]
	},
	{
		version: '1.0.3',
		time: '2019-10-02',
		content: [
			'新增星级评分组件 f-color-picker。',
		]
	},
	{
		version: '1.0.2',
		time: '2019-09-27',
		content: [
			'新增星级评分组件 f-date-rate。',
			'新增滑块组件 f-date-slider。',
		]
	},
	{
		version: '1.0.1',
		time: '2019-08-25',
		content: [
			'新增日期范围组件 f-date-range。',
			'新增日期选择组件 f-date-picker。',
		]
	},
	{
		version: '1.0.0',
		time: '2019-07-20',
		content: [
			'新增单行文本组件 f-input。',
			'新增多行文本组件 f-textarea。',
			'新增开关组件 f-switch。',
			'新增单项选择组件 f-radio。',
			'新增下拉选择组件 f-select。',
			'新增多项选择组件 f-multiple。',
		]
	}
];
export default log
