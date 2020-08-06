import Vue from 'vue';
import App from './App';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
import router from './router';
import store from './store';
import plugins from '../plugins';
import FishComponent from './pages/form-components';
import FormList from './pages/form-list';
import FormInput from './components/form-input';
import FormTextArea from './components/form-textarea';
import FormSwitch from './components/form-switch';
import FormSelect from './components/form-select';
import FormRadio from './components/form-radio';
import FormMultiple from './components/form-multiple';
import FormImage from './components/form-image';
import FormDatePicker from './components/form-datePicker';
import FormDateRange from './components/form-dateRange';
import FormRate from './components/form-rate';
import FormSlider from './components/form-slider';
import FormDivider from './components/form-divider';
import FormColorPicker from './components/form-colorPicker';
import JsonViewer from 'vue-json-viewer';

Vue.component('f-component', FishComponent);
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
