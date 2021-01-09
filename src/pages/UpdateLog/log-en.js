const log = [
	{
		version: '1.1.8',
		time: '2021-01-09',
		content: [
			'add commitlint.',
			'add typescript.',
		]
	},
	{
		version: '1.1.7',
		time: '2020-10-19',
		content: [
			'Repair the dragging of multiple types of components on the platform, showing abnormal problems.',
		]
	},
	{
		version: '1.1.6',
		time: '2020-09-30',
		content: [
			'Fix platform CSS style issues.',
			'Whether date adding function is enabled to select time.',
		]
	},
	{
		version: '1.1.5',
		time: '2020-09-28',
		content: [
			'Fix the problem of HTTPS loading in gaude map。',
			'Fix theme JavaScript error。',
			'Fixed the problem that V-form was not introduced normally after packaging.',
			'Change the starting mode and make it more popular.',
			'Introducing eslint.',
			'Packaging Optimization of webpack.',
		]
	},
	{
		version: '1.1.4',
		time: '2020-09-25',
		content: [
			'Optimize advanced table, add fixed field, type text.',
			'Add the AMap component f-amap.',
			'Fix the error information of the whole component.',
			'table update use vxe-table.',
			'Expose part of the slot, reference is more convenient.',
		]
	},
	{
		version: '1.1.3',
		time: '2020-09-23',
		content: [
			'Optimize advanced tables.',
			'open source.',
			'New diy component f-diy.',
			'Improve the documents of API Department.',
			'New events document.',
			'New verification document.',
			'Publish npm.',
			'Fix calibration report errors bug.',
			'Fix advanced table bugs.',
			'Fix diy component report errors bugs.',
			'Add throttle-debounce to optimize event anti shake.',
			'Add custom Axios instances.'
		]
	},
	{
		version: '1.1.2',
		time: '2020-09-22',
		content: [
			'Add edit status, read-only status.',
			'New form unified settings, component width, component alignment.',
			'Fix data preview issues.',
			'Add custom props.',
			'Add async validator package and optimize validate method.',
			'Add custom verification.',
			'Fix field ID modification.',
			'New read configuration.',
			'Optimize dynamic text.',
			'New grouping function,Data can be obtained according to the grouping.',
			'New data can be obtained according to hiding.',
			'New advanced table component f-table2.',
			'Add component value change callback event.',
			'Add debounce function in component.',
			'New event configuration.',
			'New title component f-title.',
		]
	},
	{
		version: '1.1.1',
		time: '2020-09-15',
		content: [
			'New regular check function.',
			'Fix the error report after the components are interchanged.',
			'Optimization of error collection method for required and regular check.',
			'Optimize drag effect.',
			'New form setting.',
		]
	},
	{
		version: '1.1.0',
		time: '2020-09-10',
		content: [
			'Optimize the layout structure and add 1:0, 1:1, 2:1, 1:2 modes.',
			'After optimizing the dynamic explicit and implicit control, the component does not move up.',
			'Optimization linkage algorithm.',
			'Remove new page preview',
			'New code preview function'
		]
	},
	{
		version: '1.0.14',
		time: '2020-08-19',
		content: [
			'Change to valine no back-end comment system.',
		]
	},
	{
		version: '1.0.13',
		time: '2020-08-15',
		content: [
			'Add plain text component f-text.',
			'New table component f-table.',
		]
	},
	{
		version: '1.0.12',
		time: '2020-07-14',
		content: [
			'Fixed f-javascript component, some text content did not use internationalization.',
			'Optimize feedback and add gitalk message function.',
			'Optimize f-javascript components, code input box.',
			'Optimize f-html components, code input box.',
			'Optimize the f-divider component and increase the width of the component. The form attribute can be controlled.',
			'Optimize the f-slider component and increase the width of the component. The form attribute can be controlled.',
			'New picture component f-image.',
			'New form attribute function, overall width.',
			'Newly added layout function, the overall layout adopts 24 points method to drag the layout randomly.',
			'New page preview.',
			'New full component Preview.',
			'Optimization help document，First Example.',
		]
	},
	{
		version: '1.0.11',
		time: '2020-06-13',
		content: [
			'New component internationalization function.',
			'Optimization help document, dynamic data.',
			'Optimization help document, quick use.',
			'New component icon ID.',
			'New password text component f-password.',
			'New JS fragment component f-javascript.',
			'New Html fragment component f-javascript.',
			'Optimize the way of component introduction and introduce dynamically.',
			'New time selection component f-timePicker.',
			'New time range component f-timeRange.',
			'New field property function, display format.',
			'New form attribute function, custom class name.',
			'New method, verifyrequired, verification required.',
		]
	},
	{
		version: '1.0.10',
		time: '2020-05-10',
		content: [
			'Optimization help document, table of contents introduction.',
			'Optimize the help document, part of the display effect.',
			'Optimize the navigation, part of the display effect.',
			'New platform and document internationalization function.',
			'Modify the navigation source code to view for purchase.',
		]
	},
	{
		version: '1.0.9',
		time: '2020-04-07',
		content: [
			'New help document.',
			'Optimize platform experience.',
			'Optimize class naming and add VF prefix.',
			'Optimize adding loading page.',
			'Fix loading page style exception.',
		]
	},
	{
		version: '1.0.8',
		time: '2020-03-06',
		content: [
			'Fixed the problem that the function of color selector component cannot be used after selection.',
			'Optimize home page, add navigation.',
			'Optimize home page, add update log.',
			'Optimize home page, add source code view.',
			'Optimize the function of dividing line components, and support the configuration of whether it is a dotted line.',
			'Optimize the division line component function, hide the non modifiable properties.',
			'Repair shuttle box component style, some styles and other styles overlay, display exception常.',
		]
	},
	{
		version: '1.0.7',
		time: '2020-02-27',
		content: [
			'Fix single selection component disable function cannot be used.',
			'Optimize the function of date selection component, and support to configure whether the value can be cleared.',
			'Optimize the function of date range component, and support to configure whether the value can be cleared.',
			'Optimize the drop-down selection component function to support the configuration of whether the value can be cleared.',
			'Optimize the function of star rating component to support the configuration of whether the value can be cleared.',
			'Optimize UI, add and use iView UI.',
		]
	},
	{
		version: '1.0.6',
		time: '2020-01-20',
		content: [
			'Optimize the function of multi-choice components, support the control of other components, cascade effect.',
			'Optimize the component function of drop-down selection component, support to control other components, cascade effect.',
			'Optimize the component function of single selection component, support to control other components, cascade effect.',
		]
	},
	{
		version: '1.0.5',
		time: '2019-12-14',
		content: [
			'Optimize the multi-choice component function, support dynamic access list.',
			'Optimize the function of drop-down selection component, support dynamic access list.',
			'Optimize the function of single selection component, support dynamic access list.',
		]
	},
	{
		version: '1.0.4',
		time: '2019-11-10',
		content: [
			'Optimize component sorting function.',
			'New decoration component segmentation line component.',
		]
	},
	{
		version: '1.0.3',
		time: '2019-10-02',
		content: [
			'New star rating component f-color-picker.',
		]
	},
	{
		version: '1.0.2',
		time: '2019-09-27',
		content: [
			'New star rating component f-date-rate.',
			'New slider component f-date-slider.',
		]
	},
	{
		version: '1.0.1',
		time: '2019-08-25',
		content: [
			'New date range component f-date-range.',
			'New date selection component f-date-picker.',
		]
	},
	{
		version: '1.0.0',
		time: '2019-07-20',
		content: [
			'New single line text component f-input.',
			'New multi line text component f-textarea.',
			'New switch component f-switch.',
			'New single selection component f-radio.',
			'New drop-down selection component f-select.',
			'New multi selection component f-multiple.',
		]
	}
];
export default log
