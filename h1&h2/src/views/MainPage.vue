<template>
    <div>
        <HeaderComponent />
        <div class="main-content">
            <h1>Main Page</h1>
            <!-- Additional content for the main page -->
        </div>
        <FooterComponent />
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
    name: 'MainPage',
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<style scoped>
/* Add styles for the main page if needed */
</style>