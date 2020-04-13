<template>
  <main id="app" class="h-100">
    <Header :stateMenu="stateMenu" @state-menu="changeStateMenu"></Header>
    <section class="page-wrap container h-100">
      <div class="row h-100 position-relative">
        <BurgerMenu
          :stateMenu="stateMenu"
          :itemsMenu="itemsMenu"
          @item-menu-slug="getContent"
          @state-menu="changeStateMenu"
        ></BurgerMenu>
        <Content :content="content"></Content>
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
    Header,
    BurgerMenu,
    Content
  },
  data() {
    return {
      stateMenu: false,
      itemsMenu: this.getItemsMenu(),
      content: this.getContent(GLOBAL.MAIN_PAGE_SLUG),
    }
  },
  methods: {
    changeStateMenu(state) {
      this.stateMenu = !state;
    },
    getContent(slug) {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({ 'slug': slug, 'method': 'get' }),
        url: GLOBAL.REST_CONTENT
      };

      axios(options)
        .then(response => {
          this.content = response.data.message;
          if (response.data.status == 'err') {
            console.log('-----error-------');
          }
          //console.log(response.data.vars);

        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        });
    },
    getItemsMenu() {
      axios
        .get(GLOBAL.REST_GET_ITEMS_MENU)
        .then(response => {
          this.itemsMenu = response.data;
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
