<template>
  <div>
    POSTS
    <post-form @create="createPost" />
    <post-list :posts="posts" @remove="removePost" />
    <div v-show="isLoading === true">Идет загрузка</div>
  </div>
</template>

<script>
import PostList from "@/components/Post/PostList.vue";
import PostForm from "./components/Post/PostForm.vue";
import axios from "axios";

export default {
  components: { PostList, PostForm },
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    async fetchPosts() {
      this.isLoading = true;
      try {
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          this.posts = response.data;
          this.isLoading = false;
        }, 10000);
      } catch (e) {
        alert("Ошибка при получении постов");
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
