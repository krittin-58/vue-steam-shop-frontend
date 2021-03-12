<template>
    <vk-grid class="uk-child-width-1-2@m">
  <div v-for="product in products" :key="product.id">
    <vk-card>
      <div slot="media-top">
        <img :src="product.large_capsule_image" alt="image-logo-game">
      </div>
      <div>
        <vk-card-title>{{ product.name }}</vk-card-title>
        
      </div>
    </vk-card>
  </div>
</vk-grid>
</template>

<script>
export default {
    name: 'Product-Item',
    props: ['products']
}
</script>