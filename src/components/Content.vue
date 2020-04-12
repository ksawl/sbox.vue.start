<template>
  <aside class="content col-12">
    <div class="col-12">
      <h1>{{ title }}</h1>
    </div>
    <div class="col-12">{{ onepost }}</div>
  </aside>
</template>

<script>
export default {
  name: 'Content',
  props: ['onepost', 'title']
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