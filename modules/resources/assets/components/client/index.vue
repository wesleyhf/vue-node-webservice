<template>
    <h1 class="title">Clients</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li class="active">Clients</li>
    </ol>

    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" v-model="search">

            <span class="input-group-btn">
                <a class="btn btn-success" v-link="{ name: 'client.create' }">
                    <span class="glyphicon glyphicon-plus"></span> New Client
                </a>
            </span>
        </div>
    </div>

    <div class="table-responsive" v-if="clients.length">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>CPF</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="client in clients | filterBy search in 'name'">
                    <td>{{ client.id }}</td>
                    <td>{{ client.name }}</td>
                    <td>{{ client.gender | gender }}</td>
                    <td>{{ client.cpf }}</td>
                    <td>
                        <a class="btn btn-default btn-xs" v-link="{ name: 'client.show', params: { id: client.id }}">
                            <span class="glyphicon glyphicon-eye-open"></span> Show
                        </a>

                        <a class="btn btn-default btn-xs" v-link="{ name: 'client.edit', params: { id: client.id }}">
                            <span class="glyphicon glyphicon-pencil"></span> Edit
                        </a>

                        <button type="button" class="btn btn-danger btn-xs" @click="destroy(client)">
                            <span class="glyphicon glyphicon-remove"></span> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="well well-lg" v-else>No clients found.</div>
</template>

<script>
export default {
    data: function() {
        return {
            clients: [],
            search: '',
        };
    },

    filters: {
        gender: function(gender) {
            return gender === 'm' ? 'Male' : 'Female';
        },
    },

    methods: {
        destroy: function(client) {
            if (confirm('You want delete the client ' + client.name)) {
                this.$resource('http://localhost:4000/client/{id}/destroy').delete({
                    id: client.id
                }).then(function(response){
                    this.clients.$remove(client);
                }).catch(function(response){
                    console.log(response);
                });
            }
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/client').get().then(function(response){
            this.$set('clients', response.data.clients);
        }).catch(function(response){
            console.log(response);
        });
    },
}
</script>
