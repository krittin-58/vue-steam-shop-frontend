<template>
    <div>
        <h3>Profile</h3>
        <vk-card>
            <div class="uk-margin-medium-top">
            <vk-tabs align="justify">
                <vk-tabs-item title="Profile">
                    {{ user }}
                </vk-tabs-item>
                <vk-tabs-item title="Order History">Hello again!</vk-tabs-item>
                <vk-tabs-item title="Wishlist">Bazinga!</vk-tabs-item>
            </vk-tabs>
        </div>
        <hr>
        <vk-button @click="logoutUser">Logout</vk-button>
        </vk-card>
        
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Profile-page',
    data() {
        return {
            user: null
        }
    },

    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user.displayName;
            }
        });
    },

    methods: {
        logoutUser() {
            firebase.auth().signOut().then(() => {
                // eslint-disable-next-line no-alert
                alert('Logout successfully');
                this.$router.replace('login');
            });
        },
    }
}
</script>