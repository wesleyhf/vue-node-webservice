module.exports = function configRoute(router) {
    router.map({
        '/dashboard': {
            name: 'dashboard.index',
            component: require('./../components/dashboard/index.vue')
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
