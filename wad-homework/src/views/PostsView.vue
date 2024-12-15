<template>
  <div class="posts">
    <Post v-for="post in posts" :key="post.id" :post="post"></Post>

    <div class="buttonDiv">
      <button class="addPost" @click="addPost">Add Post</button>
      <button class="addPost" @click="deleteAll">Delete All</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import auth from "../auth";

export default {
  name: 'HomeView',
  components: {
    Post,
  },
  data: function () {
    return {
      posts: [],
      authResult: auth.authenticated()
    }
  },
  created() {
    if (this.authResult) {
      this.fetchPosts()
    }
  },
  methods: {
    fetchPosts() {
      fetch("http://localhost:3000/api/posts", {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()).then(data => {
        this.posts = data
        console.log(this.posts)
      }).catch(error => console.error("Error fetching posts: ", error))
    },
    addPost() {
      this.$router.push('/add_post')
    },
    deleteAll() {
      const deletePromises = this.posts.map(post => {
        fetch(`http://localhost:3000/api/posts/${post.id}`, {
                method: 'DELETE',
                credentials: 'include',
            });
      })
      Promise.all(deletePromises);
      this.fetchPosts();
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
      .then(data => {
        this.fetchPosts();
      })
      .catch(error => {
        console.log("Error: ", error)
        this.$router.push('/login'); //not authenticated -> redirect to login
      })
  }
}
</script>

<style scoped>
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

.buttonDiv {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

</style>