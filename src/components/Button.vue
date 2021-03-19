<template>
    <vk-button :type="type">{{ name }}</vk-button>
</template>

<script>
export default {
    name: 'button-reuse',
    props: {
        name: String,
        type: String
    }


}
</script>