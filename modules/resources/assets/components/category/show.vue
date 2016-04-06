<template>
    <h1 class="title">Category: {{ category.title }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'category.index' }">Categories</a></li>
        <li class="active">{{ category.title }}</li>
    </ol>

    <div class="well well-lg">
        <p><b>ID:</b> {{ category.id }}</p>
        <p><b>Title:</b> {{ category.title }}</p>
    </div>
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

    created: function() {
        this.$resource('http://localhost:4000/category/{id}').get({
            id: this.$route.params.id
        }).then(function(response){
            this.$set('category', response.data.category);
        }).catch(function(response){
            console.log(response);
        });
    }
}
</script>
