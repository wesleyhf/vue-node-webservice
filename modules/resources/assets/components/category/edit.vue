<template>
    <h1 class="title">Editing category: {{ category.title }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'category.index' }">Categories</a></li>
        <li class="active">Editing category</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="category.title">
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            category: {
                id: '',
                title: '',
            },
        };
    },

    methods: {
        submit: function() {
            this.$resource('http://localhost:4000/category/{id}').update({
                id: this.category.id
            }, {
                title: this.category.title
            }).then(function(response){
                this.$router.go({name: 'category.index'});
            }).catch(function(response){
                console.log(response);
            });
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/category/{id}').get({
            id: this.$route.params.id
        }).then(function(response){
            this.$set('category', response.data.category);
        }.bind(this)).catch(function(response){
            console.log(response);
        });
    },
}
</script>
