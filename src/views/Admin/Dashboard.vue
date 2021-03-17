<template>
    <div>
        <vk-card>
            <div class="uk-margin-medium-top">
            <vk-tabs align="center">
                <vk-tabs-item title="Products">
                    <products></products>
                </vk-tabs-item>
                <vk-tabs-item title="Orders">
                    
                </vk-tabs-item>
                <vk-tabs-item title="Users">
                    
                </vk-tabs-item>
            </vk-tabs>
            </div>
        </vk-card>
        
    </div>
</template>

<script>
import Products from '@/components/admin/Products.vue'

export default {
  components: { Products },
    name: 'Product-Item'
}
</script>