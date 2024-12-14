<template>
  <div class="posts">
    <Post v-for="post in posts" 
      :id="post.id"
    ></Post>
    <button class="removeLikes" @click="removeLikes">Remove likes</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import { mapState,mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Post
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts,
    }),
  },
  methods: {
    ...mapActions(['removeLikes'])
  },
  mounted(){
    fetch("http://localhost:3000/auth/authenticate",{
      credentials: 'include'
    })
    .then(response => {
      if(!response.ok){
        throw new Error('Not Authenticated')
      }
      return response.json();
    })
    .then(data => {
      this.fetchPosts();
    })
    .catch(error =>{
      this.$router.push('/login'); //not authenticated -> redirect to login
    })
  }
}
</script>

<style scoped>
.removeLikes {
  background-color: #1e293b;
  margin-bottom: 50px;
  border-radius: 10px;
  padding: 10px;
  color: white;
  font-size: medium;
  border: none;
}

.removeLikes:hover {
  background-color: #334155;
  cursor: pointer;
}
</style>