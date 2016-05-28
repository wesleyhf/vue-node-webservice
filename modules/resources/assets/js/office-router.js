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

        // ===================================================================================
        // Client
        // ===================================================================================

        '/client': {
            name: 'client.index',
            component: require('./../components/client/index.vue')
        },

        '/client/create': {
            name: 'client.create',
            component: require('./../components/client/create.vue')
        },

        '/client/:id': {
            name: 'client.show',
            component: require('./../components/client/show.vue')
        },

        '/client/:id/edit': {
            name: 'client.edit',
            component: require('./../components/client/edit.vue')
        },

        // ===================================================================================
        // Sale
        // ===================================================================================

        '/sale': {
            name: 'sale.index',
            component: require('./../components/sale/index.vue')
        },

        '/sale/create': {
            name: 'sale.create',
            component: require('./../components/sale/create.vue')
        },

        '/sale/:id': {
            name: 'sale.show',
            component: require('./../components/sale/show.vue')
        },

        '/sale/:id/edit': {
            name: 'sale.edit',
            component: require('./../components/sale/edit.vue')
        },
    });
};
