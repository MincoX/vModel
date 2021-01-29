<template>
    <div
        class="modal fade show"
        id="modal-default"
        style="display: block; padding-right: 17px"
        aria-modal="true"
        v-if="show"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">{{ title }}</h4>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true" @click="show = false">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <formly-form
                        :form="form"
                        :model="model"
                        :fields="fields"
                    ></formly-form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                        @click="show = false"
                    >
                        取消
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="submit"
                    >
                        确认
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import req from "@/network/request";

export default {
    data() {
        return {
            deleteNode: "",
            method: "",
            show: false,
            title: "",
            apiUrl: {},
            form: {},
            model: {},
            fields: [],
        };
    },
    methods: {
        showModal(kwargs) {
            this.show = true;
            this.deleteNode = kwargs.deleteNode;
            this.title = kwargs.title;
            this.method = kwargs.method;
            this.model = kwargs.model;
            this.fields = kwargs.fields;
            this.apiUrl = kwargs.apiUrl;
        },

        submit() {
            this.show = false;
            if (this.method == "get") {
                req.fetch(this.apiUrl.path, this.model, {
                    successNotify: true,
                }).then(
                    (res) => {},
                    (err) => {}
                );
            } else {
                req.post(this.apiUrl.path, this.model, {
                    successNotify: true,
                }).then(
                    (res) => {
                        // 后端删除成功后，删除页面元素
                        if (this.deleteNode != undefined) {
                            this.deleteNode.remove();
                        }
                    },
                    (err) => {}
                );
            }
        },
    },
};
</script>

<style scoped lang='scss'>
.modal {
    background-color: rgba(0, 0, 0, 0.8);
    .modal-dialog {
        margin-top: 180px;
    }
    .modal-body {
        height: auto;
        width: auto;
        overflow: scroll;
    }
    //定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸
    ::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }
    //定义滑块 内阴影+圆角
    ::-webkit-scrollbar-thumb {
        border-radius: 1em;
        background-color: rgba(50, 50, 50, 0.3);
    }
    //定义滚动条轨道 内阴影+圆角
    ::-webkit-scrollbar-track {
        border-radius: 1em;
        background-color: rgba(50, 50, 50, 0.1);
    }
}
</style>