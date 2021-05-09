module.exports = {
    user: {
        login: { path: '/api/common/user_login'},
        loginout: { path: '/api/common/login_out'},
    },
    proxy: {
        getProxies: { path: '/api/vmodel/getProxies' },
        updateProxy: { path: '/api/vmodel/updateProxy' },
        deleteProxy: { path: '/api/vmodel/deleteProxy' }
    },
    test: {
        getTest: { path: '/api/vmodel/get_test' },
        postTest: { path: '/api/vmodel/post_test' },
    }
}
