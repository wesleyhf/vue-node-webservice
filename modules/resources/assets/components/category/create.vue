<template>
    <h1 class="title">Creating new category</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'category.index' }">Categories</a></li>
        <li class="active">New category</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            title: '',
        };
    },

    methods: {
        submit: function() {
            this.$resource('http://localhost:4000/category/{id}').save({
                title: this.title
            }).then(function(response){
                this.$router.go({name: 'category.index'});
            }).catch(function(response){
                console.log(response);
            });
        },
    },
}
</script>
