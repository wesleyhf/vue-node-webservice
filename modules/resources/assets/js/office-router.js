module.exports = function configRoute(router) {
    router.map({
        '/dashboard': {
            name: 'dashboard.index',
            component: require('./../components/dashboard/index.vue')
        },

        // ===================================================================================
        // Category
        // ===================================================================================

        '/category': {
            name: 'category.index',
            component: require('./../components/category/index.vue')
        },

        '/category/create': {
            name: 'category.create',
            component: require('./../components/category/create.vue')
        },

        '/category/:id': {
            name: 'category.show',
            component: require('./../components/category/show.vue')
        },

        '/category/:id/edit': {
            name: 'category.edit',
            component: require('./../components/category/edit.vue')
        },

        // ===================================================================================
        // Product
        // ===================================================================================

        '/product': {
            name: 'product.index',
            component: require('./../components/product/index.vue')
        },

        '/product/create': {
            name: 'product.create',
            component: require('./../components/product/create.vue')
        },

        '/product/:id': {
            name: 'product.show',
            component: require('./../components/product/show.vue')
        },

        '/product/:id/edit': {
            name: 'product.edit',
            component: require('./../components/product/edit.vue')
        },
    });
};
