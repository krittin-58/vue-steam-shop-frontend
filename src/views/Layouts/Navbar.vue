<template>
    <vk-navbar transparent>
    <vk-navbar-nav>
        <vk-navbar-nav-item href="/" title="Home" active></vk-navbar-nav-item>
        <vk-navbar-nav-item href="/products" title="Products"></vk-navbar-nav-item>
        <vk-navbar-nav-item href="/checkout" title="Checkout"></vk-navbar-nav-item>
        <vk-navbar-nav-item href="/about" title="About"></vk-navbar-nav-item>
    </vk-navbar-nav>
    <vk-navbar-nav slot="right">
        <vk-navbar-item>
            <form action="javascript:void(0)">
                <vk-button-link href="/login">{{ displayName ? displayName : 'Login'}}</vk-button-link>
            </form>
        </vk-navbar-item>
    </vk-navbar-nav>
    </vk-navbar>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'NavBar',
    data() {
        return {
            displayName: null
        }
    },

    mounted() {
        this.checkAuthUser();
    },

    methods: {
        checkAuthUser() {
            firebase.auth().onAuthStateChanged((user) => {
                if (user !== null) {
                    this.displayName = user.displayName
                } else {
                    this.displayName = null
                }
            });
        }
    }
}
</script>