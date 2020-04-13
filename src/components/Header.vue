<template>
  <header>
    <div class="container">
      <buttonBurger
        :classButton="classMenu"
        :stateButton="stateMenu"
        @state-button="stateMenuGoParent"
      >
        <span slot="inner">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </span>
      </buttonBurger>
      <h1>SPA</h1>
    </div>
  </header>
</template>

<script>
import buttonBurger from '@/components/lib/elem/Button'

export default {
  name: 'Header',
  components: {
    buttonBurger
  },
  props: ['stateMenu'],
  data() {
    return { classMenu: 'burger' }
  },
  methods: {
    stateMenuGoParent(state) {
      this.stateMenu = state;
      this.$emit('state-menu', this.stateMenu);
    }
  }
}
</script>

<style>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  width: auto;
  height: 40px;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.095);
  transition: background-color 0.3s ease-in-out;
}
header h1 {
  margin: 0;
  font-size: 30px;
}
.burger {
  background-color: transparent;
  border: 0;
  width: 40px;
  height: 40px;
  font-size: 30px;
  outline: none;
  color: #9f9f9f;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}
.burger:active {
  background-color: rgba(0, 0, 0, 0.1);
}
.burger:focus {
  outline: none;
}
.burger .bar {
  position: relative;
  top: 0;
  background: rgb(0, 0, 0, 0.5);
  height: 3px;
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
}
.burger .bar:not(:last-child) {
  margin-bottom: 6px;
}
.burger.active .bar:nth-child(1) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 8px;
}
.burger.active .bar:nth-child(2) {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
  opacity: 0;
}
.burger.active .bar:nth-child(3) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
  top: -10px;
}
</style>