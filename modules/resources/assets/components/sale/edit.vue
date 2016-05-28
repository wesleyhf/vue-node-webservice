<template>
    <h1 class="title">Editing Sale: {{ sale.id }}</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'sale.index' }">Sales</a></li>
        <li class="active">{{ sale.id }}</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="name">Client</label>
            <input type="text" class="form-control" id="name" :value="sale.client.name" disabled>
        </div>

        <div class="form-group">
            <label for="date">Date</label>
            <input type="text" class="form-control" id="date" :value="sale.date | moment 'DD/MM/YYYY - HH:MM:SS'" disabled>
        </div>

        <div class="form-group">
            <label for="totalValue">Total Value</label>
            <input type="text" class="form-control" id="totalValue" :value="sale.totalValue" disabled>
        </div>

        <div class="form-group">
            <label for="status">Status</label>
            <select class="form-control" id="status" v-model="sale.status">
                <option value="o">Open</option>
                <option value="f">Finalized</option>
                <option value="c">Closed</option>
            </select>
        </div>

        <hr>

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

        <button type="submit" class="btn btn-default">Submit</button>
    </form>
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

        submit: function() {
            this.$resource('http://localhost:4000/sale/{id}').update({
                id: this.sale.id
            }, {
                status: this.sale.status
            }).then(function(response){
                this.$router.go({name: 'sale.index'});
            }).catch(function(response){
                console.log(response);
            });
        },
    },

    created: function() {
        this.$resource('http://localhost:4000/sale/{id}').get({
            id: this.$route.params.id
        }).then(function(response){
            this.$set('sale', response.data.sale);
        }.bind(this)).catch(function(response){
            console.log(response);
        });

        // get all products
        this.$resource('http://localhost:4000/product/active').get().then(function(response){
            this.$set('products', response.data.products);
        }).catch(function(response){
            console.log(response);
        });
    },
}
</script>
