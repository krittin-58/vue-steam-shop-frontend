<template>
    <vk-card>
       <vk-table cell-middle :data="data" responsive>
            <vk-table-column cell="name"></vk-table-column>
            <vk-table-column cell="city"></vk-table-column>
            <vk-table-column cell="state"></vk-table-column>
            <vk-table-column><vk-button type="info">Edit</vk-button> <vk-button type="danger">Delete</vk-button></vk-table-column>
        </vk-table> 
    </vk-card>
    
</template>

<script>
export default {
    name: 'Product-Table',
    data() {
        return {
            data: [
                { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
                { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
                { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' },
                { name: 'John A. Smith', city: 'San Francisco', state: 'CA' },
                { name: 'Joan B. Jones', city: 'New York', state: 'NY' },
                { name: 'Bob C. Uncle', city: 'Los Angeles', state: 'CA' }
            ]
        }
    }
}
</script>