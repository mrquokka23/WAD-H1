<template>
    <div>
        <div class="login-content">
            <h1>Login Page</h1>
                <form @submit.prevent="handleSubmit"> <!--triggers when form is submitted -->
                    <input type="email" v-model="email" placeholder="Email" required/><br/>
                    <input type="password" v-model="password" placeholder="Password" required @input="validatePassword"/><br /> 
                    <!-- password triggers validatepassword() 
                    and gives errors to errorMessages if the condition is not met-->
                    <button type="submit">Sign Up</button><br />
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
export default {
    name: 'LoginPage',
    data(){
        return {
            email: '',
            password: '',
            errorMessages: [],
        };
    },
    methods:{
        validatePassword(){
            this.errorMessages = [];
            //https://www.w3schools.com/howto/howto_js_password_validation.asp
            //https://stackoverflow.com/questions/16377163/password-uppercase-characters-javascript
            const password = this.password;
            var pwd2 = /^(?=.*[A-Z])/;
            var pwd3 = /^(?=.*[a-z].*[a-z])/; 
            var pwd4 = /^(?=.*[0-9])/;
            var pwd6 = /^(?=.*[_])/;


            
            //length 8-14
            if (password.length < 8 || password.length >= 15){
                this.errorMessages.push('Password must be between 8-14 characters')
            }
            //uppercase
            if(!pwd2.test(password)){
                this.errorMessages.push('Password must have at least 1 uppercase character')
            }
            
            if(!pwd3.test(password)){
                this.errorMessages.push('Password must have atleast 2 lowercase characters')
                }
            if(!pwd4.test(password)){
                this.errorMessages.push('Password must have atleast 1 numeric value')
            }
            //https://stackoverflow.com/questions/3427132/how-to-get-first-character-of-string
            if(!pwd2.test(Array.from(password)[0])){
                this.errorMessages.push('Password must start with a uppercase character')
            }
            if(!pwd6.test(password)){
                this.errorMessages.push('Password must have _ character')
            }

    

        },
        handleSubmit() {
            this.validatePassword();
            if(this.errorMessages.length == 0){
                alert('Form submitted successfully');

                this.username = '';
                this.email = '';
                this.password = '';
            }
            else{
                alert('Fix the errors in password')
            }
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
}
.error-messages{
    padding: 15px;
    background-color: #D9D9D9;
    border-radius: 8px;
}

/* Add styles for the login page if needed */
</style>