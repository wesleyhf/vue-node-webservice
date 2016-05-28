var Vue = require('vue');
var VueRouter = require('vue-router');
var VueResource = require('vue-resource');
var VueMoment = require('vue-moment');
var configRouter = require('./office-router');

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueMoment);

var router = new VueRouter({
    saveScrollPosition: true
});

// configure router - set all routes
configRouter(router);

// Start app
var Office = require('./../components/office.vue');
router.start(Office, '#app');
