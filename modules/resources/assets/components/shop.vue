<template>
    <div id="sales">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a class="navbar-brand" v-link="{ name: 'dashboard.index' }">Shop</a>
                </div>

                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
                        <li><a v-link="{ name: 'client.index' }">Clients</a></li>
                        <li><a v-link="{ name: 'sale.index' }">Sales</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    created: function() {
        this.$route.router.go({name: 'dashboard.index'});
    },
}
</script>
