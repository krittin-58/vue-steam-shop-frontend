<template>
    <vk-grid gutter="large" class="uk-child-width-1-3@s uk-flex-center uk-text-center">
      <div v-for="product in products" :key="product.id">
        <vk-card>
          <div slot="media-top">
            <img :src="product.large_capsule_image" alt="image-logo-game">
          </div>
          <div>
            <vk-card-title>{{ product.name }}</vk-card-title>
            <p>
              <vk-label slot="badge">{{ product.currency }} {{ product.original_price ? removeZeroPrice(product.original_price) : 'FREE!' }}</vk-label>
            </p>
          </div>
          <div>
            <vk-button>Add to cart</vk-button> |
            <vk-icon-button icon="heart"></vk-icon-button>
          </div>
        </vk-card>
      </div>
    </vk-grid>
</template>

<script>
export default {
    name: 'Product-Card',
    props: ['products'],

    methods: {
      removeZeroPrice(price) {
        return Number(price) / 100;
      }
    }
}
</script>