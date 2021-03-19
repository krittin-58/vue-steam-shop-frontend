<template>
  <div class="login">
    <div><button @click="googleLogin" class="uk-button uk-button-secondary uk-child-width-expand@s uk-margin-small-bottom">Login with Google</button></div>
    <div><button class="uk-button uk-button-primary uk-child-width-expand@s uk-margin-small-bottom">Login with Facebook</button></div>
    <div><button class="uk-button uk-button-default uk-child-width-expand@s uk-margin-small-bottom">Login with Phone number</button></div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login-page',
    components: {},
    data() {
        return {
            isAdmin: false,
        }
    },

    methods: {
        googleLogin() {
            const googleProvider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(googleProvider).then((response) => {
                const { isNewUser } = response.additionalUserInfo;
                if (isNewUser) {
                    firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
                        userId: response.user.uid,
                        email: response.user.email,
                        emailVerified: response.user.emailVerified,
                        displayName: response.user.displayName,
                        phoneNumber: response.user.phoneNumber,
                        avatarImagePath: response.user.photoURL,
                        loginMethod: response.credential.signInMethod,
                        registeredAt: response.user.metadata.creationTime,
                        isAdmin: this.isAdmin
                    });
                }
            });
            this.$router.replace('/');
        }
    }
}
</script>