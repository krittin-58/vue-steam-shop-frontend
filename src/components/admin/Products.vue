<template>
    <div>
        <vk-navbar transparent>
            <vk-navbar-nav slot="right">
                <div>
                    <button-reuseable 
                        :name="buttonName"
                        :type="buttonType">
                    </button-reuseable>
                </div>
            </vk-navbar-nav>
        </vk-navbar>
        <div class="uk-overflow-auto">
            <product-table></product-table>
        </div>
    </div>
    
</template>

<script>
import ButtonReuseable from '../Button.vue'
import ProductTable from './ProductTable.vue'
export default {
  components: { ProductTable, ButtonReuseable },
    name: 'Admin-Products',

    data() {
        return {
            buttonName: 'New Product',
            buttonType: 'primary'
        }
    }
}
</script>