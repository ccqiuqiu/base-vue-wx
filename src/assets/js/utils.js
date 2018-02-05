/**
 * Created by 熊超超 on 2017/8/15.
 */
import dateUtils from './dateUtils'

let locale = null
let i18n = null

/**
 * loading
 * @param mes 传字符串，loading显示，传false，loading关闭
 */
const loading = (mes = 'ddd') => {
  if (mes) {
    window.vue.$dialog.loading.open(mes)
  } else {
    window.vue.$dialog.loading.close()
  }
}
/**
 * toast
 * @param mes
 * @param icon success和error可选
 * @param timeout
 */
const toast = (mes, icon = 'success', timeout = 2000) => {
  window.vue.$dialog.toast({mes, timeout, icon})
}
/**
 * alert框
 * @param mes 文本
 * @param confirmCb 确认按钮回调
 * @param confirmText 确认按钮文本
 */
const alert = (mes, confirmCb, confirmText = i18n.t('确定')) => {
  window.vue.$dialog.alert({mes, callback: () => confirmCb && confirmCb()})
  // ui库的alert不支持自定义确认按钮的文字，用下面这个比较傻的方法扩展一下，有空再改为比较合适的实现
  document.querySelector('.yd-confirm-btn').innerHTML = confirmText
}
/**
 * 消息框，会显示在页面顶部
 * @param mes
 * @param timeout
 * @param cb
 */
const notify = (mes, timeout = 5000, cb) => {
  this.$dialog.notify({mes, timeout, callback: () => cb && cb()})
}
/**
 * 确认框，可以传3个参数和4个参数
 * 4个参数的时候，后2个是确认和取消的回调
 * 3个参数的时候，第3个参数是按钮数组
 * @param title 标题
 * @param mes 内容
 * @param okCb
 * @param cancelCb
 */
const confirm = (title = i18n.t('提示'), mes, okCb, cancelCb) => {
  let btn = []
  if (isArray(okCb)) {
    btn = okCb
  } else {
    btn = [
      {
        txt: i18n.t('取消'),
        color: false,
        callback: () => cancelCb && cancelCb()
      },
      {
        txt: i18n.t('确定'),
        color: true,
        callback: () => okCb && okCb()
      }
    ]
  }
  window.vue.$dialog.confirm({title, mes, opts: btn})
}

const isArray = obj => Object.prototype.toString.call(obj) === '[object Array]'

export default {
  install(Vue, $i18n) {
    i18n = $i18n
    locale = i18n.locale
    dateUtils.config(locale)
    Vue.prototype.$loading = loading
    Vue.prototype.$toast = toast
    Vue.prototype.$alert = alert
    Vue.prototype.$notify = notify
    Vue.prototype.$confirm = confirm
    Vue.prototype.$isArray = isArray
    Vue.prototype.$date = dateUtils
    // 混入
    Vue.mixin({
      filters: {}
    })
  }
}
// 此处导出是给js文件使用
export {loading, toast, alert, notify, confirm, isArray, locale, i18n, dateUtils as date}
