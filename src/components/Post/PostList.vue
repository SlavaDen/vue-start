<template>
  <post-list-item
    :post="post"
    class="post"
    v-for="(post, i) in posts"
    :key="i"
  />
</template>

<script>
import PostListItem from "./PostListItem.vue";
export default {
  components: { PostListItem },
  props: {
    posts: {
      type: Array,
      requered: true,
    },
  },
};
</script>

<style scoped>
.post {
  padding: 20px;
  background-color: antiquewhite;
  margin-top: 25px;
}
</style>
