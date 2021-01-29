import { Notification } from 'element-ui'
// 样式再全局已经引入
// import 'element-ui/lib/theme-chalk/index.css'

export default {
    handleSuccess: function (msg) {
        Notification({
            title: msg || '操作成功',
            type: 'success'
        });
    },
    handleWarning: function (msg) {
        Notification({
            title: '警告',
            message: msg,
            type: 'warning'
        });
    },
    handleError: function (msg) {
        Notification({
            title: msg || '操作失败',
            type: 'error'
        });
    },

    checkEmailFunction: function (params, val) {
        console.info('checkEmailFunction params form.status', params, val.name)
        return false
    }
}
