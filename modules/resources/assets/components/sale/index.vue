<template>
    <h1 class="title">Sales</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li class="active">Sales</li>
    </ol>

    <div class="form-group">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" v-model="search">

            <span class="input-group-btn">
                <a class="btn btn-success" v-link="{ name: 'sale.create' }">
                    <span class="glyphicon glyphicon-plus"></span> New Sale
                </a>
            </span>
        </div>
    </div>

    <div class="table-responsive" v-if="sales.length">
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Client name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total value</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="sale in sales | filterBy search in 'client.name'">
                    <td>{{ sale.id }}</td>
                    <td>{{ sale.client.name }}</td>
                    <td>{{ sale.date | moment "DD/MM/YYYY - HH:MM:SS" }}</td>

                    <td>
                        <span class="label label-success" v-if="sale.status === 'o'">Open</span>
                        <span class="label label-info" v-if="sale.status === 'f'">Finalized</span>
                        <span class="label label-danger" v-if="sale.status === 'c'">Closed</span>
                    </td>

                    <td>{{ sale.totalValue | currency '$ '}}</td>
                    <td>
                        <a class="btn btn-default btn-xs" v-link="{ name: 'sale.show', params: { id: sale.id }}">
                            <span class="glyphicon glyphicon-eye-open"></span> Show
                        </a>

                        <a class="btn btn-default btn-xs" v-link="{ name: 'sale.edit', params: { id: sale.id }}">
                            <span class="glyphicon glyphicon-pencil"></span> Edit
                        </a>

                        <button type="button" class="btn btn-danger btn-xs" @click="destroy(sale)">
                            <span class="glyphicon glyphicon-remove"></span> Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="well well-lg" v-else>No sales found.</div>
</template>

<script>
export default {
    data: function() {
        return {
            sales: [],
            search: '',
        };
    },

    methods: {
        destroy: function(sale) {
            if (confirm('You want delete the sale ' + sale.name)) {
                this.$resource('http://localhost:4000/sale/{id}/destroy').delete({
                    id: sale.id
                }).then(function(response){
                    this.sales.$remove(sale);
                }).catch(function(response){
                    console.log(response);
                });
            }
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/sale').get().then(function(response){
            this.$set('sales', response.data.sales);
        }).catch(function(response){
            console.log(response);
        });
    },
}
</script>
