<template>
  <div class="posts">
    <Post v-for="post in posts" 
      :key="post.id" 
      :date="formatDate(new Date(post.created_at))"
      :image="post.imageUrl" 
      :text="post.content" 
    ></Post>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from '@/components/Post.vue'
import { mapState } from 'vuex';

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
    formatDate(date) {
      return Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }).format(date);
    }
  }
}
</script>