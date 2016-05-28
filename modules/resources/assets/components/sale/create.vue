<template>
    <h1 class="title">Creating new sale</h1>

    <ol class="breadcrumb">
        <li><a v-link="{ name: 'dashboard.index' }">Dashboard</a></li>
        <li><a v-link="{ name: 'sale.index' }">Sales</a></li>
        <li class="active">New sale</li>
    </ol>

    <form @submit.prevent="submit()">
        <div class="form-group">
            <label for="client">Client</label>
            <select class="form-control" id="client" v-model="clientId">
                <option v-for="client in clients" :value="client.id">
                    {{ client.name }}
                </option>
            </select>
        </div>

        <div class="well well-sm">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="product">Product</label>

                        <div class="input-group">
                            <select class="form-control" id="product" v-model="productId">
                                <option v-for="product in products" :value="product.id">
                                    {{ product.name }}
                                </option>
                            </select>

                            <span class="input-group-addon">{{ productValue | currency '$ ' }}</span>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="form-group">
                        <label for="quantity">Quantity</label>

                        <div class="input-group">
                            <input
                                type="number"
                                step="1"
                                class="form-control"
                                id="quantity"
                                placeholder="Quantity"
                                v-model="quantity"
                                number
                            >

                            <span class="input-group-btn">
                                <button type="button" class="btn btn-success" @click="addCart()">Add to cart</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Cart</h3>
            </div>

            <div class="panel-body" v-if="! cart.length">Empty</div>

            <table class="table table-bordered table-striped" v-else>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unitary Value</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in cart">
                        <td>{{ productName(item.productId) }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.unitaryValue | currency '$ ' }}</td>
                        <td>
                            <button type="button" class="btn btn-danger btn-xs" @click="removeCart(item)">
                                <span class="glyphicon glyphicon-remove"></span> Remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="panel-footer">Total: {{ totalValue | currency '$ ' }}</div>
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            clients: [],
            products: [],

            clientId: null,
            productId: null,
            quantity: null,
            cart: [],
        };
    },

    computed: {
        productValue: function() {
            if (! this.productId) return 0;

            for (var x in this.products) {
                if (this.products[x].id === this.productId) return this.products[x].value;
            }
        },

        totalValue: function() {
            if (this.cart.length === 0) return 0;

            var totalValue = 0;

            for (var item in this.cart) {
                var value = this.cart[item].unitaryValue * this.cart[item].quantity;
                totalValue += value;
            }

            return totalValue;
        },
    },

    methods: {
        addCart: function() {
            if (! this.productId) {
                alert('Product not selected');
                return;
            }

            if (! this.quantity) {
                alert('Quantity not specified');
                return;
            }

            var item = {
                productId: this.productId,
                quantity: this.quantity,
                unitaryValue: this.productValue,
            };

            this.cart.push(item);

            this.productId = this.products[0].id;
            this.quantity = 0;
        },

        removeCart: function(item) {
            if (confirm('You want to remove this item ?')) {
                this.cart.$remove(item);
            }
        },

        productName: function(productId) {
            for (var x in this.products) {
                if (this.products[x].id === productId) return this.products[x].name;
            }
        },

        submit: function() {
            this.$resource('http://localhost:4000/sale').save({
                clientId: this.clientId,
                totalValue: this.totalValue,
                cart: this.cart
            }).then(function(response){
                this.$router.go({name: 'sale.index'});
            }).catch(function(response){
                console.log(response);
            });
        },
    },

    created: function() {
        // get all clients
        this.$resource('http://localhost:4000/client').get().then(function(response){
            this.$set('clients', response.data.clients);
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
