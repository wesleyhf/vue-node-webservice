<template>
    <h1 class="title">Editing product: {{ product.title }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'product.index' }">Products</a></li>
        <li class="active">Editing product</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" v-model="product.name">
        </div>

        <div class="form-group">
            <label for="category">Category</label>
            <select class="form-control" id="category" v-model="product.categoryId">
                <option v-for="category in categories" :value="category.id">
                    {{ category.title }}
                </option>
            </select>
        </div>

        <div class="form-group">
            <label for="value">Value</label>
            <div class="input-group">
                <span class="input-group-addon">$</span>
                <input type="text" class="form-control" id="value" placeholder="Value" v-model="product.value" number>
            </div>
        </div>

        <div class="form-group">
            <div class="checkbox">
                <label>
                    <input type="checkbox" v-model="product.active"> Active
                </label>
            </div>
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
    </form>
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

            categories: [],
        };
    },

    methods: {
        submit: function() {
            this.$resource('http://localhost:4000/product/{id}').update({
                id: this.product.id
            }, {
                name: this.product.name,
                categoryId: this.product.categoryId,
                value: this.product.value,
                active: this.product.active
            }).then(function(response){
                this.$router.go({name: 'product.index'});
            }).catch(function(response){
                console.log(response);
            });
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/category').get().then(function(response){
            this.$set('categories', response.data.categories);
        }).catch(function(response){
            console.log(response);
        });

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
