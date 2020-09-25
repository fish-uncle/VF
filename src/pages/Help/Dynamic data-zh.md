## 动态数据
该功能针对，多项选择、下拉选择、单项选择组件。

### 第一步
在功能区添加该种类型的组件（多项选择、下拉选择、单项选择）

### 第二步
选择字段属性

### 第三步
查看到`选择项配置`

在`选择项数据地址`中配上你的ajax地址

附上一个测试ajax地址

https://cdn.shenzhepei.com/VF/select.json

### 第四步
如果你想要修改你的ajax请求整体返回格式

只需要将你的axios实例，在eslink-vf加载前暴露到window.vf_request下就行了
```shell script
import Vue from 'vue'
import App from './App'
import ViewUI from 'view-design'
import request from './utils/request'
import {VList} from 'eslink-vf'

window.vf_request = request

Vue.use(ViewUI)
Vue.config.productionTip = false
Vue.component('v-list', VList)
```

