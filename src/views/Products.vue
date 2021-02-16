<template>
    <div>
        <h1>Products</h1>
        <ProductList></ProductList>
    </div>
</template>

<script>
import ProductList from '../components/product/ProductList'

export default {
    name: 'Products',
    components: {
        ProductList
    }
}
</script>