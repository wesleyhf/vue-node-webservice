<template>
    <h1 class="title">Categories</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li class="active">Categories</li>
    </ol>

    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" v-model="search">

            <span class="input-group-btn">
                <a class="btn btn-success" v-link="{ name: 'category.create' }">
                    <span class="glyphicon glyphicon-plus"></span> New Category
                </a>
            </span>
        </div>
    </div>

    <div class="table-responsive" v-if="categories.length">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="category in categories | filterBy search in 'title'">
                    <td>{{ category.id }}</td>
                    <td>{{ category.title }}</td>
                    <td>
                        <a class="btn btn-default btn-xs" v-link="{ name: 'category.show', params: { id: category.id }}">
                            <span class="glyphicon glyphicon-eye-open"></span> Show
                        </a>

                        <a class="btn btn-default btn-xs" v-link="{ name: 'category.edit', params: { id: category.id }}">
                            <span class="glyphicon glyphicon-pencil"></span> Edit
                        </a>

                        <button type="button" class="btn btn-danger btn-xs" @click="destroy(category)">
                            <span class="glyphicon glyphicon-remove"></span> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="well well-lg" v-else>No categories found.</div>
</template>

<script>
export default {
    data: function() {
        return {
            categories: [],
            search: '',
        };
    },

    methods: {
        destroy: function(category) {
            if (confirm('You want delete the category ' + category.title)) {
                this.$resource('http://localhost:4000/category/{id}/destroy').delete({
                    id: category.id
                }).then(function(response){
                    this.categories.$remove(category);
                }).catch(function(response){
                    console.log(response);
                });
            }
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/category').get().then(function(response){
            this.$set('categories', response.data.categories);
        }).catch(function(response){
            console.log(response);
        });
    },
}
</script>
