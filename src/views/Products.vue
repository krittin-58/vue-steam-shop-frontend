<template>
    <div>
        <div class="uk-margin-medium-top">
            <vk-tabs align="center">
                <vk-tabs-item title="Featured">
                    <product-card :products="products.large_capsules"></product-card>
                </vk-tabs-item>
                <vk-tabs-item title="Windows">
                    <product-card :products="products.featured_win"></product-card>
                </vk-tabs-item>
                <vk-tabs-item title="Mac OSX">
                    <product-card :products="products.featured_mac"></product-card>
                </vk-tabs-item>
                <vk-tabs-item title="Linux">
                    <product-card :products="products.featured_linux"></product-card>
                </vk-tabs-item>
            </vk-tabs>
            </div>
    </div>
</template>

<script>
import SteamStoreAPI from '../services/api'
import ProductCard from '../components/product/ProductCard.vue';

export default {
    name: 'Products',
    components: {
        ProductCard
    },
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
                this.products.featured_mac = response.data.featured_mac
                this.products.featured_linux = response.data.featured_linux
            });
        },
    }
}
</script>