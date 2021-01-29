<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">库存</h3>
                    <div class="card-tools">
                        <div
                            class="input-group input-group-sm"
                            style="width: 150px"
                        >
                            <input
                                type="text"
                                name="table_search"
                                class="form-control float-right"
                                placeholder="Search"
                            />

                            <div class="input-group-append">
                                <button type="submit" class="btn btn-default">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.card-header -->
                <div class="card-body table-responsive p-0">
                    <table class="table table-hover" style="text-align: center">
                        <thead>
                            <tr>
                                <th>Ip</th>
                                <th>Port</th>
                                <th>Protocol</th>
                                <th>Speed</th>
                                <th>Obj</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in proxies" :key="index">
                                <td>{{ item.ip }}</td>
                                <td>{{ item.port }}</td>
                                <td>{{ item.protocol }}</td>
                                <td>{{ item.speed }}</td>
                                <td>{{ item.score }}</td>
                                <td>
                                    <button
                                        v-modal="{
                                            title: '修改 ' + item.ip + ' 信息',
                                            apiUrl: 'post.proxy.updateProxy',
                                            fieldService:
                                                'ProxyModifyInfoFields',
                                            model: item,
                                        }"
                                        class="btn btn-warning"
                                    >
                                        修改
                                    </button>
                                    <button
                                        v-modal="{
                                            title: '删除 ' + item.ip,
                                            model: { id: item.id },
                                            apiUrl: 'post.proxy.deleteProxy',
                                            deleteNode:
                                                'el.parentNode.parentNode',
                                        }"
                                        class="btn btn-danger"
                                    >
                                        删除
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import urls from "@/network/apiUrls";
export default {
    inject: ["reload"],
    data() {
        return {
            proxies: null,
        };
    },
    mounted() {
        this.getProxies();
    },
    methods: {
        getProxies: function () {
            this.$req.fetch(urls.proxy.getProxies.path, {}, {}).then(
                (res) => {
                    this.proxies = res.data;
                },
                (err) => {}
            );
        },
    },
};
</script>


<style lang="scss">
</style>

