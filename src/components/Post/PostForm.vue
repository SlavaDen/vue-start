<template>
  <form @submit.prevent>
    <custom-input v-model="post.title" type="text" placeholder="title" />
    <custom-input v-model="post.body" type="text" placeholder="body" />
    <custom-button @click="createPost">Создать</custom-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
.posts {
  background-color: antiquewhite;
}
</style>
