<template>
  <aside class="sidebar col-3">
    <div class="row">
      <div class="col-12"></div>
      <div class="col-12 title-list">
        <div v-for="(title, index) in listpages" @click="getOnePost(index, title)" :key="index">
          <div class="item" :class="classObject(index)">{{ title }}</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar',
  props: ['listpages'],
  data() {
    return {
      currentId: 0
    }
  },
  methods: {
    classObject(index) {
      return {
        active: this.currentId == index
      }
    },
    getOnePost(index, title) {
      this.currentId = index;
      this.$emit('get-post-index', index);
      this.$emit('get-post-title', title);
    }
  }
}
</script>

<style>
.sidebar {
  box-shadow: 1px 0 1px rgba(180, 180, 180, 0.25);
}
.title-list .item {
  position: relative;
  padding: 0 0 0 15px;
  font-size: 18px;
  line-height: 35px;
  cursor: pointer;
}
.title-list .item:after,
.title-list .item.active:after {
  content: "";
  position: absolute;
  top: 0;
  right: -15px;
  width: 15px;
  height: 100%;
}
.title-list .item:hover,
.title-list .item:hover:after,
.title-list .item.active,
.title-list .item.active::after {
  background-color: #ccc;
}
</style>