<template>
  <div>
    POSTS
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/Post/PostList.vue";
import PostForm from "./components/Post/PostForm.vue";

export default {
  components: { PostList, PostForm },
  data() {
    return {
      posts: [
        { id: 1, title: "JS", body: "BODY" },
        { id: 2, title: "JS 2", body: "BODY 2" },
        { id: 3, title: "JS 3", body: "BODY 3" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
