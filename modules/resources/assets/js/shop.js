var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var configRouter = require('./shop-router');

Vue.use(VueRouter);
Vue.use(VueResource);

var router = new VueRouter({
    saveScrollPosition: true
});

// configure router - set all routes
configRouter(router);

// Debug mode
Vue.config.debug = true;

// Start app
var Shop = require('./../components/shop.vue');
router.start(Shop, '#app');
