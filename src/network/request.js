import axios from 'axios';

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import utils from '@/static/js/app/utils'
import Loading from '@/components/common/loading'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://vmodel.mincox.club';
// axios.defaults.baseURL = 'http://127.0.0.1:5000';

axios.interceptors.request.use(
    config => {
        //开始加载进度条
        NProgress.start()
        Loading.start()
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        // config.data = JSON.stringify(config.data);
        // config.headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // }
        // if(token){
        //   config.params = {'token':token}
        // }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


axios.interceptors.response.use(
    response => {
        //结束加载进度条
        NProgress.done()
        Loading.done()
        if (response.status == 400) {
            router.push({
                path: "/login",
                query: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)

export default {

    fetch: function (url, params = {}, options = {}) {

        let {
            successNotify = false, errorNotify = true
        } = options;

        /*
        reject后的东西，一定会进入then中的第二个回调，如果then中没有写第二个回调，则进入catch
        的情况和rej一样，但是他俩只会有一个发生
        另外，网络异常（比如断网），会直接进入catch而不会进入then的第二个回调**
        */

        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: params
            }).then(response => {
                // service 请求成功
                if (response.data.code == 200) {
                    // api 操作成功
                    if (successNotify) utils.handleSuccess(response.data.msg);
                } else {
                    // api 操作失败
                    if (errorNotify) utils.handleWarning(response.data.msg);
                }
                // 返回 service 的数据
                resolve(response.data);
            }, err => {
                // 服务器异常
                utils.handleError('服务器异常，请联系管理员')
                reject(err)
            }).catch(err => {
                // 网络异常
                utils.handleError('网络异常，请稍后重试');
                reject(err)
            })
        })
    },

    post: function (url, data = {}, options = {}) {
        let {
            successNotify = false, errorNotify = true
        } = options;

        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(response => {
                    if (response.data.code == 200) {
                        if (successNotify) utils.handleSuccess(response.data.msg);
                    } else {
                        if (errorNotify) utils.handleWarning(response.data.msg);
                    }
                    resolve(response.data);
                }, err => {
                    // 服务器异常
                    utils.handleError('服务器异常，请联系管理员')
                    reject(err)
                }).catch(err => {
                    // 网络异常
                    utils.handleError('网络异常，请稍后重试');
                    reject(err)
                })
        })
    },
}
