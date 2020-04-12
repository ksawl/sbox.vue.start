<template>
  <aside class="content col-12">
    <div class="col-12"></div>
    <div class="col-12">{{ content }}</div>
  </aside>
</template>

<script>
export default {
  name: 'Content',
  props: ['content']
}
</script>

<style>
h1 {
  margin-top: 25px;
}
.content {
  background-color: #fff;
  padding-bottom: 25px;
}
</style>