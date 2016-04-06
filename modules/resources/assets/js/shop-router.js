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
    });
};
