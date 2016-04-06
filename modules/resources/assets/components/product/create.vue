<template>
    <h1 class="title">Creating new product</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'product.index' }">Products</a></li>
        <li class="active">New product</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
        </div>

        <div class="form-group">
            <label for="category">Category</label>
            <select class="form-control" id="category" v-model="categoryId">
                <option v-for="category in categories" :value="category.id">
                    {{ category.title }}
                </option>
            </select>
        </div>

        <div class="form-group">
            <label for="value">Value</label>
            <div class="input-group">
                <span class="input-group-addon">$</span>
                <input type="text" class="form-control" id="value" placeholder="Value" v-model="value" number>
            </div>
        </div>

        <div class="form-group">
            <div class="checkbox">
                <label>
                    <input type="checkbox" v-model="active"> Active
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
            name: '',
            categoryId: null,
            value: '',
            active: true,
            categories: [],
        };
    },

    methods: {
        submit: function() {
            this.$resource('http://localhost:4000/product/{id}').save({
                name: this.name,
                categoryId: this.categoryId,
                value: this.value,
                active: this.active
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
    }
}
</script>
