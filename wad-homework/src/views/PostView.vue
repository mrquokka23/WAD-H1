<template>
    <div class="posts">
        <div class="post">
            <h3>A Post</h3>
            <label for="content">Body</label>
            <div class="break"></div>
            <textarea id="content" v-model="editablePost.content" rows="5"></textarea>
            <div class="buttonDiv">
                <button class="button" @click="Update">Update</button>
                <button class="button" @click="Delete">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import auth from "../auth";

export default {
    name: 'PostView',
    props: {
        id: {
            type: String,
            required: true,
            authResult: auth.authenticated()
        }
    },
    data() {
        return {
            post: null,
            editablePost: {}
        };
    },
    created() {
        this.fetchPost()
    },
    computed: {
        formattedDate() {
            if (!this.post || !this.post.created_at) return '';
            return this.formatDate(new Date(this.post.created_at));
        },
        likeSrc() {
            if (this.isHovering) {
                return '/res/images/like_filled.png'
            } else {
                return '/res/images/like.png'
            }
        }
    },
    methods: {
        formatDate(date) {
            return Intl.DateTimeFormat('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            }).format(date);
        },
        fetchPost() {
            fetch(`http://localhost:3000/api/posts/${this.id}`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                const clonedResponse = response.clone();
                return response.json().then(data => {
                    return { status: clonedResponse.status, data };
                });
            })
                .then(({ status, data }) => {
                    console.log("Response Status:", status);
                    console.log("Response Data:", data);
                    this.post = data;
                    this.editablePost = { ...this.post };
                }).catch(error => console.error("Error fetching post: ", error));
        },
        Update() {
            const updatedData = {
                content: this.editablePost.content,
                image_url: ''
            };
            fetch(`http://localhost:3000/api/posts/${this.id}`, {
                method: 'PUT', // Using PUT as per server endpoint
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
        },
        Delete() {
            fetch(`http://localhost:3000/api/posts/${this.id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
            this.$router.push('/')
        }
    },

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

.buttonDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.button {
    background-color: #1e293b;
    margin-bottom: 50px;
    border-radius: 10px;
    padding: 10px;
    color: white;
    font-size: medium;
    border: none;
}

.button:hover {
    background-color: #334155;
    cursor: pointer;
}
</style>