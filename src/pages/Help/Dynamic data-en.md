## Dynamic data
This function aims at multiple selection, drop-down selection and single selection components.

### Step one
Add this type of component in the ribbon (multiple selection, drop-down selection, single selection)

### Step two
Select field properties

### Step three
View the `option configuration`

Match your `Ajax address` in the option data address

Attach a test Ajax address

https://cdn.shenzhepei.com/VF/select.json

### Step four
If you want to modify the overall return format of your Ajax request

Just expose your axios instance to the window.vf_request Just ask

```shell script
import Vue from 'vue'
import App from './App'
import ViewUI from 'view-design'

import request from './utils/request'

window.vf_request = request
import {VList} from 'eslink-vf'

Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.component('v-list', VList)
```
