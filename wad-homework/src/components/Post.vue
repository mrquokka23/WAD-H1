<template>
  <router-link :to="{ name: 'PostView', params: { id: post.id }, state: { post } }" class="post-link">
    <div class="post">
      <div class="postHeader">
        <img class="userImage" src="../assets/me.png" alt="User image">
        <h2 class="date">{{ formattedDate }}</h2>
      </div>
      <img v-if="post.image_url" class="postImage" :src="post.image_url" alt="Image">
      <p class="postText">{{ post.content }}</p>
    </div>
  </router-link>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }

  },
  data() {
    return {
      isHovering: false
    };
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

.postText {
  font-weight: normal;
}

.post-link {
  text-decoration: none;
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}
</style>