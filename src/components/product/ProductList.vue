<template>
    <div>
        <h1>Product List</h1>
        <p>{{ products }}</p>
    </div>
</template>

<script>
import SteamStoreAPI from '../../services/api'

export default {
    name: 'Product-list',
    data() {
        return {
            products: null
        }
    },

    mounted() {
        this.getFeaturedGames();
    },

    methods: {
        getFeaturedGames() {
            SteamStoreAPI.getFeaturedAPI().then((response) => {
                this.products = response.data
            });
        },
    }
}
</script>