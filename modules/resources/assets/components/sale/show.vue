<template>
    <h1 class="title">Client: {{ client.name }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'client.index' }">Clients</a></li>
        <li class="active">{{ client.name }}</li>
    </ol>

    <div class="well well-lg">
        <p><b>ID:</b> {{ client.id }}</p>
        <p><b>Name:</b> {{ client.name }}</p>
        <p><b>Gender:</b> {{ client.gender }}</p>
        <p><b>CPF:</b> {{ client.cpf }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            client: {
                id: '',
                name: '',
                gender: '',
                cpf: '',
            },
        };
    },

    created: function() {
        this.$resource('http://localhost:4000/client/{id}').get({
            id: this.$route.params.id
        }).then(function(response){
            this.$set('client', response.data.client);
        }).catch(function(response){
            console.log(response);
        });
    }
}
</script>
