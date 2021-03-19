<template>
    <div>
        <h1>Product List</h1>
        <product-card :products="products.large_capsules"></product-card>
    </div>
</template>

<script>
import SteamStoreAPI from '../../services/api'
import ProductCard from './ProductCard.vue';

export default {
  components: { ProductCard },
    name: 'Product-list',
    data() {
        return {
            products: {
                large_capsules: null,
                featured_win: null,
                featured_mac: null,
                featured_linux: null
            }
        }
    },

    mounted() {
        this.getFeaturedGames();
    },

    methods: {
        getFeaturedGames() {
            SteamStoreAPI.getFeaturedAPI().then((response) => {
                this.products.large_capsules = response.data.large_capsules
                this.products.featured_win = response.data.featured_win
            });
        },
    }
}
</script>