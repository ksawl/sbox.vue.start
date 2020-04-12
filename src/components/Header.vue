<template>
  <header>
    <div class="container">
      <h1>SPA</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
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
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
}
header h1 {
  margin: 0;
  font-size: 30px;
}
</style>