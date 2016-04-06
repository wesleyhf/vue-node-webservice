var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var configRouter = require('./office-router');

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
var Office = require('./../components/office.vue');
router.start(Office, '#app');
