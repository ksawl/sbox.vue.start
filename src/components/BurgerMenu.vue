<template>
  <transition name="slide-fade">
    <aside class="menu col-8 col-sm-4 col-md-3 col-xl-2" v-show="stateMenu">
      <div class="row">
        <div class="col-12"></div>
        <div class="col-12 title-list">
          <div class="row" v-for="title in titles" @click="getContent(title)" :key="title.id">
            <div class="item" :class="{ 'active': currentId == title.id }">{{ title.title }}</div>
          </div>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
export default {
  name: 'BurgerMenu',
  props: ['stateMenu', 'titles'],
  data() {
    return {
      currentId: 0
    }
  },
  methods: {
    menuShow() {
      return this.stateMenu
    },
    getContent(title) {
      this.currentId = title.id;
      this.$emit('get-post-id', title.id);
      this.$emit('get-post-title', title.title);
      this.$emit('state-menu', this.stateMenu);
    }
  }
}
</script>

<style>
.menu {
  position: fixed;
  top: 40px;
  bottom: 0px;
  z-index: 1;
  background-color: #fff;
  box-shadow: 1px 0 3px rgba(0, 0, 0, 0.16);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.65, 0.05, 0.36, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
.title-list .item {
  width: 100%;
  padding: 0 0 0 15px;
  font-size: 18px;
  line-height: 35px;
  cursor: pointer;
}
.title-list .item:hover,
.title-list .item.active {
  background-color: #ccc;
}
</style>