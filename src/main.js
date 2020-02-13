import Vue from 'vue'
import App from './App.vue'

// 导入组件
import ZwButton from './components/button.vue'

// 导入字体图标文件
import './fonts/font.scss'
Vue.config.productionTip = false

// 注册组件(全局注册)
Vue.component(ZwButton.name, ZwButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
