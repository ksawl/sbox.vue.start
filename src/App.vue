<template>
  <div id="app">
    <Header></Header>
    <main>
      <Sidebar></Sidebar>
      <Content></Content>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'Sidebar': Sidebar,
    'Content': Content
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none !important;
  box-sizing: border-box;
  text-decoration: none !important;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  color: #131313;
  font-family: "Gotham Pro";
}
</style>
