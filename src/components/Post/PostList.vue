<template>
  <div v-if="posts.length > 0">
    <post-list-item
      :post="post"
      class="post"
      v-for="post in posts"
      :key="post.id"
      @remove="$emit('remove', post)"
    />
  </div>
  <div v-else>
    <h1>Список постов пуст</h1>
  </div>
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
