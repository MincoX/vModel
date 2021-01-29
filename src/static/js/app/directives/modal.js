/*
  需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。

  思路：
    1、第一次点击，立即调用方法并禁用按钮，等延迟结束再次激活按钮
    2、将需要触发的方法绑定在指令上
  
  使用：给 Dom 加上 v-debounce 及回调函数即可
  <button v-debounce="debounceClick">防抖提交</button>
*/

import urls from "@/network/apiUrls";
import modal from "@/components/common/modal";


export default {
    inserted: function (el, binding) {
        el.addEventListener('click', () => {

            if (binding.value.fields == undefined) {
                if (binding.value.fieldService != undefined) {
                    var fields = eval(binding.value.fieldService)()
                } else {
                    var fields = []
                }
            } else {
                var fields = binding.value.fields
            }

            var mods = binding.value.apiUrl.split('.')
            var apiUrl = urls[mods[1]][mods[2]]

            if(binding.value.deleteNode != undefined) {
                var node = eval(binding.value.deleteNode)
            }

            modal.showModal({
                deleteNode: node,
                fields: fields,
                model: binding.value.model,
                apiUrl: apiUrl,
                method: mods[0],
                title: binding.value.title,
                returnUrl: binding.value.returnUrl,
            })

        })
    },
    // bind: function (params) {
    //     console.info('bind be exec')
    // },
    // update: function (el, bingd) {
    //     console.info('update be exec')
    // },
    // unbind: function (params) {
    //     console.info('unbind be exec')
    // },
    // componentUpdated: function (params) {
    //     console.info('componentUpdated be exec')
    // }
}

function ProxyModifyInfoFields() {
    return [
        {
            key: 'ip',
            type: 'input',
            required: true,
            templateOptions: { label: 'Ip', atts: { placeholder: '请输入Ip' } },
        },
        {
            key: 'port',
            type: 'input',
            required: true,
            templateOptions: { label: 'Port', atts: { placeholder: '请输入Port' } },
        },
        {
            key: 'protocol',
            type: 'input',
            required: true,
            templateOptions: { label: 'Protocol', atts: { placeholder: '请输入Protocol' } },
        },
        {
            key: 'speed',
            type: 'input',
            required: true,
            templateOptions: { label: 'Speed', atts: { placeholder: '请输入Speed' } },
        },
        {
            key: 'score',
            type: 'input',
            required: true,
            templateOptions: { label: 'Score', atts: { placeholder: '请输入Score' } },
        },
    ]
}

function example() {
    return [
        {
            key: 'sex',
            type: 'select',
            options: ['Male', 'Female'],
            templateOptions: {
                label: 'Sex'
            }

        },
        {
            key: 'status',
            type: 'select',
            templateOptions: { label: '账号状态' },
            options: [
                { label: '禁用', value: false },
                { label: '激活', value: true },
            ],
        },
    ]
}
