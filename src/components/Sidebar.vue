<template>
  <aside class="sidebar col-3">
    <div class="row">
      <div class="col-12"></div>
      <div class="col-12">
        <div v-for="(title, index) in listpages" @click="getOnePost(index)" :key="index">{{ title }}</div>
      </div>
    </div>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar',
  props: ['listpages'],
  methods: {
    getOnePost(index) {
      this.$emit('get-one-post', index);
    }
  }
}
</script>

<style>
</style>