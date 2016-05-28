<template>
    <h1 class="title">Sale: {{ sale.id }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'sale.index' }">Sales</a></li>
        <li class="active">{{ sale.id }}</li>
    </ol>

    <div class="well well-lg">
        <p><b>ID:</b> {{ sale.id }}</p>
        <p><b>Client:</b> {{ sale.client.name }}</p>
        <p><b>Date:</b> {{ sale.date | moment "DD/MM/YYYY - HH:MM:SS" }}</p>
        <p>
            <b>Status:</b>
            <span class="label label-success" v-if="sale.status === 'o'">Open</span>
            <span class="label label-info" v-if="sale.status === 'f'">Finalized</span>
            <span class="label label-danger" v-if="sale.status === 'c'">Closed</span>
        </p>
        <p><b>Total Value:</b> {{ sale.totalValue | currency '$ '}}</p>
    </div>

    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">Cart</h3>
        </div>

        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Unitary Value</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="item in sale.saleItems">
                    <td>{{ productName(item.productId) }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.unitaryValue | currency '$ ' }}</td>
                </tr>
            </tbody>
        </table>

        <div class="panel-footer">Total: {{ sale.totalValue | currency '$ ' }}</div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            sale: {
                id: null,
                clientId: null,
                date: '',
                status: '',
                totalValue: null,
                client: {
                    id: null,
                    name: '',
                    gender: '',
                    cpf: '',
                },
                saleItems: [],
            },
            products: [],
        };
    },

    methods: {
        productName: function(productId) {
            for (var x in this.products) {
                if (this.products[x].id === productId) return this.products[x].name;
            }
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/sale/{id}').get({
            id: this.$route.params.id
        }).then(function(response){
            this.$set('sale', response.data.sale);
        }).catch(function(response){
            console.log(response);
        });

        // get all products
        this.$resource('http://localhost:4000/product/active').get().then(function(response){
            this.$set('products', response.data.products);
        }).catch(function(response){
            console.log(response);
        });
    }
}
</script>
