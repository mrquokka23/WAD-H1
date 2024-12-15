<template>
    <div class="main-content">
        <div class="login-content">
            <h1>Login Page</h1>
            <form @submit.prevent="handleSubmit"> <!--triggers when form is submitted -->
                <input type="email" v-model="email" placeholder="Email" required /><br />
                <input type="password" v-model="password" placeholder="Password" required
                    @input="validatePassword" /><br />
                <!-- password triggers validatepassword() 
                    and gives errors to errorMessages if the condition is not met-->
                    <div class="button-row">
                        <button type="submit" class="submit-button">Login</button>
                        <span class="or-text">Or</span>
                        <button type="button" class="submit-button" @click="$router.push('/signUp')">Signup</button>
                    </div>
                <div v-if="errorMessages.length" class="error-messages">
                    <p>The password is not valid:</p>
                    <ul>
                        <li v-for="(message, index) in errorMessages" :key="index">{{ message }}</li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import store from '@/store';

export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: '',
            errorMessages: [],
        };
    },
    methods: {
        validatePassword() {
            this.errorMessages = [];
            //https://www.w3schools.com/howto/howto_js_password_validation.asp
            //https://stackoverflow.com/questions/16377163/password-uppercase-characters-javascript
            const password = this.password;
            var pwd2 = /^(?=.*[A-Z])/;
            var pwd3 = /^(?=.*[a-z].*[a-z])/;
            var pwd4 = /^(?=.*[0-9])/;
            var pwd6 = /^(?=.*[_])/;



            //length 8-14
            if (password.length < 8 || password.length >= 15) {
                this.errorMessages.push('Password must be between 8-14 characters')
            }
            //uppercase
            if (!pwd2.test(password)) {
                this.errorMessages.push('Password must have at least 1 uppercase character')
            }

            if (!pwd3.test(password)) {
                this.errorMessages.push('Password must have atleast 2 lowercase characters')
            }
            if (!pwd4.test(password)) {
                this.errorMessages.push('Password must have atleast 1 numeric value')
            }
            //https://stackoverflow.com/questions/3427132/how-to-get-first-character-of-string
            if (!pwd2.test(Array.from(password)[0])) {
                this.errorMessages.push('Password must start with a uppercase character')
            }
            if (!pwd6.test(password)) {
                this.errorMessages.push('Password must have _ character')
            }



        },
        handleSubmit() {
            this.validatePassword();
            if (this.errorMessages.length == 0) {
                fetch("http://localhost:3000/auth/login", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({email: this.email, password: this.password})
                })
                .then(response => {
                    if(!response.ok){
                        throw new Error(`HTTP error ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    alert('Login Successful');
                    store.dispatch('updateUser', this.email)
                    this.email = '';
                    this.password = '';
                    this.$router.push('/'); //redirect main page
                })
                .catch(error => {
                    alert(error.message);
                })
            }
            else {
                alert('Fix the errors in password')
            }
        }
    }
}
</script>

<style scoped>
@media (max-width: 1000px) {
    h1 {
        font-size: 50px;
    }

    input {
        font-size: 30px;
        height: 80px;
        padding: 20px;
    }

    button {
        font-size: 30px;
        padding: 20px;
    }
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    background-color: #D9D9D9;
    border-radius: 20px;
    width: 80vw;
}

.error-messages {
    padding: 15px;
    background-color: #f87171;
    border-radius: 20px;
}

.main-content {
    min-height: 70vh;
}

.login-content {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.button-row {
    display: flex;
    align-items: center;
    margin-top: 10px;
}
.or-text {
    margin: 0 10px;
}
/* Add styles for the login page if needed */
</style>