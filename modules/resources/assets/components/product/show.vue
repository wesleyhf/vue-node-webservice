<template>
    <h1 class="title">Product: {{ product.name }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'product.index' }">Products</a></li>
        <li class="active">{{ product.name }}</li>
    </ol>

    <div class="well well-lg">
        <p><b>ID:</b> {{ product.id }}</p>
        <p><b>Name:</b> {{ product.name }}</p>
        <p><b>Category:</b> {{ product.category.title }}</p>
        <p><b>Value:</b> $ {{ product.value }}</p>
        <p>
            <b>Status:</b>
            <span class="label label-success" v-if="product.active">Active</span>
            <span class="label label-danger" v-else>Disabled</span>
        </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            product: {
                name: '',
                categoryId: null,
                value: null,
                active: true,
                category: {
                    id: null,
                    title: null,
                }
            },
        };
    },

    created: function() {
        this.$resource('http://localhost:4000/product/{id}').get({
            id: this.$route.params.id
        }).then(function(response){
            this.$set('product', response.data.product);
        }).catch(function(response){
            console.log(response);
        });
    }
}
</script>
