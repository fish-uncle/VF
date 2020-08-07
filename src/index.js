import Vue from 'vue';
import App from './App';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
import router from './router';
import store from './store';
import plugins from '../plugins';
import FormComponent from './components/FormComponents';
import FormList from './components/FormList';
import FormInput from './func/form-input';
import FormTextArea from './func/form-textarea';
import FormSwitch from './func/form-switch';
import FormSelect from './func/form-select';
import FormRadio from './func/form-radio';
import FormMultiple from './func/form-multiple';
import FormImage from './func/form-image';
import FormDatePicker from './func/form-datePicker';
import FormDateRange from './func/form-dateRange';
import FormRate from './func/form-rate';
import FormSlider from './func/form-slider';
import FormDivider from './func/form-divider';
import FormColorPicker from './func/form-colorPicker';
import JsonViewer from 'vue-json-viewer';

Vue.component('f-component', FormComponent);
Vue.component('f-list', FormList);
Vue.component('f-input', FormInput);
Vue.component('f-textarea', FormTextArea);
Vue.component('f-switch', FormSwitch);
Vue.component('f-radio', FormRadio);
Vue.component('f-select', FormSelect);
Vue.component('f-multiple', FormMultiple);
Vue.component('f-image', FormImage);
Vue.component('f-date-range', FormDateRange);
Vue.component('f-date-picker', FormDatePicker);
Vue.component('f-rate', FormRate);
Vue.component('f-slider', FormSlider);
Vue.component('f-divider', FormDivider);
Vue.component('f-color-picker', FormColorPicker);
Vue.config.productionTip = false;
Vue.use(plugins);
Vue.use(JsonViewer);

Array.prototype.removeByValue = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#root");

document.getElementById('vf-loading').remove();
console.log(
  `%c VF %c v${process.env.pkg.version} %c`,
  'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
  'background:rgb(18, 120, 245) ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
  'background:transparent'
)
