<template>
    <h1 class="title">Creating new client</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'client.index' }">Clients</a></li>
        <li class="active">New client</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
        </div>

        <div class="form-group">
            <label for="gender">Gender</label>
            <select class="form-control" id="gender" v-model="gender">
                <option value="m">Male</option>
                <option value="f">Female</option>
            </select>
        </div>

        <div class="form-group">
            <label for="cpf">CPF</label>
            <input type="text" class="form-control" id="cpf" placeholder="000.000.000-00" v-model="cpf">
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            name: '',
            gender: '',
            cpf: '',
        };
    },

    methods: {
        submit: function() {
            this.$resource('http://localhost:4000/client').save({
                name: this.name,
                gender: this.gender,
                cpf: this.cpf
            }).then(function(response){
                this.$router.go({name: 'client.index'});
            }).catch(function(response){
                console.log(response);
            });
        },
    },
}
</script>
