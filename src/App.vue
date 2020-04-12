<template>
  <main id="app" class="h-100">
    <Header :stateMenu="stateMenu" @state-menu="changeStateMenu"></Header>
    <section class="page-wrap container h-100">
      <div class="row h-100 position-relative">
        <BurgerMenu
          :stateMenu="stateMenu"
          :titles="titles"
          @get-post-id="getContent"
          @get-post-title="setTitle"
          @state-menu="changeStateMenu"
        ></BurgerMenu>
        <Content :onepost="onepost" :title="title"></Content>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import GLOBAL from '@/components/lib/Global.js'

import Header from '@/components/Header'
import BurgerMenu from '@/components/BurgerMenu'
import Content from '@/components/Content'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'BurgerMenu': BurgerMenu,
    'Content': Content
  },
  data() {
    return {
      titles: this.getTitles(),
      onepost: this.getContent(0),
      title: 'Wellcome!',
      stateMenu: false
    }
  },
  methods: {
    changeStateMenu(state) {
      this.stateMenu = !state;
    },
    setTitle(title) {
      this.title = title;
    },
    getContent(id) {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({ 'id': id, 'method': 'get' }),
        url: GLOBAL.REST_ONEPAGE
      };
      axios(options)
        .then(response => {
          if (response.data.status != 'err') {
            this.onepost = response.data.message;
          } else {
            console.log('-----error-------');
            this.onepost = response.data.message;
          }
          //console.log(response.data.vars);

        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        });
      //this.titles.splice(index, 1);
    },
    getTitles() {
      axios
        .get(GLOBAL.REST_GETTITLES)
        .then(response => {
          this.titles = response.data;
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
html,
body {
  background-color: #f5f5f5;
  height: 100%;
  margin: 0;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 1rem;
  color: #304455;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
main {
  position: relative;
  padding-top: 40px;
}
</style>
