<template>
    <header>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/login">Log in</router-link>
            <div class="userDropdown" @click="toggleDropdown">
                <a href="#" id="account-link">
                    <img class="userImage" src="res/images/me.png" alt="User image">
                </a>
                <div v-if="isDropdownVisible" id="dropdown" class="dropdown-content">
                    <span id="username">John Doe</span>
                    <span id="email">john.doe@ut.ee</span>
                    <a href="#" id="logout">Logout</a>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
    data() {
        return {
            isDropdownVisible: false, 
        };
    },
    methods: {
        toggleDropdown(event) {
            event.preventDefault(); 
            this.isDropdownVisible = !this.isDropdownVisible; 
        },
        handleClickOutside(event) {
            const dropdown = this.$el.querySelector('.dropdown-content');
            const accountLink = this.$el.querySelector('#account-link');

            
            if (dropdown && !dropdown.contains(event.target) && !accountLink.contains(event.target)) {
                this.isDropdownVisible = false; 
            }
        }
    },
    mounted() {
        
        window.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.handleClickOutside);
    }
}
</script>

<style scoped>
/* When needed let's add styles for header */
</style>