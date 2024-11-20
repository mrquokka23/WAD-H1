<template>
    <div class="post">
            <div class="postHeader">
                <img class="userImage" src="../assets/me.png" alt="User image">
                <h2 class="date">{{ date }}</h2>
            </div>
            <img v-if="image" class="postImage" :src="image" alt="Image">
            <p class="postText">{{ text }}</p>
            <div class="likeDiv">
                <img class="like" src="../assets/like.png" alt="Like">
                <h3>{{ likes }} likes</h3>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    date: String,
    image: [String, null],
    text: String
  }
}
</script>