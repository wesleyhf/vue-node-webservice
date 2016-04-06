<template>
    <div id="office">
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <a class="navbar-brand" v-link="{ name: 'dashboard.index' }">Office</a>
                </div>

                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
                        <li><a v-link="{ name: 'category.index' }">Categories</a></li>
                        <li><a v-link="{ name: 'product.index' }">Products</a></li>
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
