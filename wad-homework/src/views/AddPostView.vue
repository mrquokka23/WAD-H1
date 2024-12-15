<template>
    <div class="posts">
        <div class="post">
            <h3>Add Post</h3>
            <label for="content">Body</label>
            <div class="break"></div>
            <textarea id="content" v-model="newPostContent" placeholder="Write your post here..." rows="5"></textarea>
            <div class="buttonDiv">
                <button class="addPost" @click="addPost" :disabled="!isAuthenticated">Add Post</button>
            </div>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import { mapState } from 'vuex';

export default {
    name: 'Add Post',
    data() {
        return {
            newPostContent: '',
            newPostImageUrl: '',
        };
    },
    computed: {
        ...mapState({
            isAuthenticated: state => state.user.authenticated,
            userEmail: state => state.user.email,
        }),
    },
    components: {

    },
    methods: {
        Logout() {
            fetch("http://localhost:3000/auth/logout", {
                credentials: 'include', //  Don't forget to specify this if you need cookies
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    console.log('jwt removed');
                    //console.log('jwt removed:' + auth.authenticated());
                    this.$router.push("/login");
                    //location.assign("/");
                })
                .catch((e) => {
                    console.log(e);
                    console.log("error logout");
                });
        },
        addPost() {
            console.log("EMAIL: ", store.state.user.email);
            fetch("http://localhost:3000/api/posts", {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({ email: store.state.user.email, content: this.newPostContent, image_url: '' }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    if (!response.ok) {
                        if (response.status === 401) {
                            throw new Error('Unauthorized: Please log in.');
                        } else {
                            throw new Error(`Failed to add post with status ${response.status}`);
                        }
                    }
                    this.newPostContent = '';
                    this.newPostImageUrl = '';
                    return response.json();
                })
                .catch(error => {
                    console.log("Error: ", error)
                })
            this.$router.push('/')
        }
    },
    mounted() {
        fetch("http://localhost:3000/auth/authenticate", {
            credentials: 'include'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Not Authenticated')
                }
                return response.json();
            })
            .catch(error => {
                console.log("Error: ", error)
                this.$router.push('/login'); //not authenticated -> redirect to login
            })
    }
}
</script>

<style scoped>
.post {
    align-items: center;
}

label {
    text-align: left;
    width: 90%;
}

.break {
    margin: 5px;
    height: 1px;
    width: 90%;
    background-color: #1e293b;
}

textarea {
    width: 90%;
}

.addPost {
    background-color: #1e293b;
    margin-bottom: 50px;
    border-radius: 10px;
    padding: 10px;
    color: white;
    font-size: medium;
    border: none;
}

.addPost:hover {
    background-color: #334155;
    cursor: pointer;
}
</style>