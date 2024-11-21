<template>
  <div class="post">
    <div class="postHeader">
      <img class="userImage" src="../assets/me.png" alt="User image">
      <h2 class="date">{{ formattedDate }}</h2>
    </div>
    <img v-if="post.imageUrl" class="postImage" :src="post.imageUrl" alt="Image">
    <p class="postText">{{ post.content }}</p>
    <div class="likeDiv">
      <button
        class="like-button"
        @click="handleAddLike"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
        aria-label="Like"
      >
        <img
          class="like"
          :src="likeSrc"
          alt="Like icon"
        >
      </button>
      <h3>{{ post.like_count }} likes</h3>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Post',
  props: {
    id: Number
  },
  data() {
    return {
      isHovering: false
    };
  },
  computed: {
    ...mapGetters(['getPostById']),
    post() {
      return this.getPostById(this.id);
    },
    formattedDate() {
      if (!this.post || !this.post.created_at) return '';
      return this.formatDate(new Date(this.post.created_at));
    },
    likeSrc() {
      if(this.isHovering){
        return '/res/images/like_filled.png'
      } else {
        return '/res/images/like.png'
      }
    }
  },
  methods: {
    ...mapActions(['addLike']),
    handleAddLike() {
      this.addLike(this.id);
    },
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

<style scoped>
button {
  border: none;
  background-color: transparent;

}

button:hover {
  cursor: pointer;
}
</style>