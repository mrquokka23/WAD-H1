<template>
    <div>
        <HeaderComponent />
        <div class="login-content">
            <h1>Login Page</h1>
            <!-- Form for logging in goes here -->
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'LoginPage',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>
/* Add styles for the login page if needed */
</style>