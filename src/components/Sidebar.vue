<template>
  <aside class="sidebar">
    <div v-for="post in posts" :key="post">{{ post }}</div>
  </aside>
</template>

<script>
import axios from 'axios'
import GLOBAL from '@/components/lib/Global.js';

export default {
  name: 'Sidebar',
  data() {
    return {
      posts: null
    }
  },
  created() {
    this.getAllPosts();
  },
  methods: {
    getAllPosts() {
      axios
        .get(GLOBAL.REST_URL + 'getList')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        });
    }
  }
}
</script>

<style>
</style>