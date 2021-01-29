module.exports = {
    account: {
        login: {},
        loginout: {},
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
