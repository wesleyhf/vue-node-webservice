<template>
    <h1 class="title">Products</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li class="active">Products</li>
    </ol>

    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" v-model="search">

            <span class="input-group-btn">
                <a class="btn btn-success" v-link="{ name: 'product.create' }">
                    <span class="glyphicon glyphicon-plus"></span> New Product
                </a>
            </span>
        </div>
    </div>

    <div class="table-responsive" v-if="products.length">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Value</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="product in products | filterBy search in 'name'">
                    <td>{{ product.id }}</td>
                    <td>{{ product.name }}</td>
                    <td>{{ product.category.title }}</td>
                    <td>{{ product.value | currency '$ '}}</td>

                    <td>
                        <span class="label label-success" v-if="product.active">Active</span>
                        <span class="label label-danger" v-else>Disabled</span>
                    </td>

                    <td>
                        <a class="btn btn-default btn-xs" v-link="{ name: 'product.show', params: { id: product.id }}">
                            <span class="glyphicon glyphicon-eye-open"></span> Show
                        </a>

                        <a class="btn btn-default btn-xs" v-link="{ name: 'product.edit', params: { id: product.id }}">
                            <span class="glyphicon glyphicon-pencil"></span> Edit
                        </a>

                        <button type="button" class="btn btn-danger btn-xs" @click="destroy(product)">
                            <span class="glyphicon glyphicon-remove"></span> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="well well-lg" v-else>No products found.</div>
</template>

<script>
export default {
    data: function() {
        return {
            products: '',
            search: '',
        };
    },

    methods: {
        destroy: function(product) {
            if (confirm('You want delete the product ' + product.name)) {
                this.$resource('http://localhost:4000/product/{id}/destroy').delete({
                    id: product.id
                }).then(function(response){
                    this.products.$remove(product);
                }).catch(function(response){
                    console.log(response);
                });
            }
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/product').get().then(function(response){
            this.$set('products', response.data.products);
        }).catch(function(response){
            console.log(response);
        });
    },
}
</script>
