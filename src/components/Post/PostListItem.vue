<template>
  <div class="post">
    <h2>Title</h2>
    <h3>{{ post.title }}</h3>
    <body>
      {{ post.body }}
    </body>
    <custom-button @click="$emit('remove', post)">Удалить</custom-button>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      requered: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid #333;
}
</style>
