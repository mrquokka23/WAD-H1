<template>
    <header>
        <nav>
            <div>
                <router-link class="header-link" to="/">Home</router-link>
                <router-link class="header-link" to="/login">Log in</router-link>
                <router-link class="header-link" to="/signUp">Sign Up</router-link>
            </div>
            <div class="userDropdown" @click="toggleDropdown">
                <a href="#" id="account-link">
                    <img class="userImage" src="../assets/me.png" alt="User image">
                </a>
                <div v-show="isDropdownVisible" id="dropdown" class="dropdown-content">
                    <span id="email">{{ email }}</span>
                    <a href="#" id="logout" @click.prevent="logout">Logout</a>
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
            email: '',
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
        },
        logout(){
            fetch('http://localhost:3000/auth/logout',{
                credentials: 'include'
            })
            .then(response => {
                if(response.ok){
                    this.email = '';
                    this.username = '';
                    this.$router.push('/login');
                } else{
                    alert('Logout not successful')
                }
            })
            .catch(error => {
                console.error('Error logging out:', error);
                alert('Error occured while logging out');
            });
        },
        userDataFetching(){
            fetch("http://localhost:3000/auth/user",{
                credentials: 'include'
            })
            .then(response => {
                if(!response.ok){
                    throw new Error('Not authenticated');
            }
            return response.json();
            })
            .then(data => {
                this.email = data.email;
                this.username = data.username;
            })
            .catch(error => {
                console.log(error.message);
            });
    },
    mounted() {

        window.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        window.removeEventListener('click', this.handleClickOutside);
    }
}}
</script>

<style scoped>
/* When needed let's add styles for header */
</style>