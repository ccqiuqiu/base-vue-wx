/**
 * Created by 熊超超 on 2017/8/4.
 */
import Vue from 'vue'
import App from './App.vue'
import router from './global/router'
import store from './global/store'

import YDUI from 'vue-ydui'
import 'vue-ydui/dist/ydui.rem.css'
import './assets/css/theme.less'
Vue.use(YDUI)

// 全局组件
import Icon from './baseComponents/CcIcon.vue'
Vue.component('CcIcon', Icon)

// 布局样式
import 'flex.css'
import './assets/css/base.less'

// 动画
import vueg from 'vueg'
import './assets/css/animate.css'
Vue.use(vueg, router)

// 国际化相关
const locale = window.localStorage.getItem('lang') || 'zh-cn' // 语言标识
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: locale,
  messages: {
    'zh-cn': require('./assets/js/i18n/zh-cn').default,
    'en-us': require('./assets/js/i18n/en-us').default
  }
})

// 注册一些工具类
import utils from '$js/utils'
Vue.use(utils, i18n)

// 当使用npm run mock 启动的时候 使用mock数据
if (process.env.MOCK) {
  /* eslint-disable */
  require ('../mock')
}

Vue.config.productionTip = false

window.vue = new Vue({
  i18n,
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
