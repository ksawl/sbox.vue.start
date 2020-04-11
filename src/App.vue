<template>
  <div id="app">
    <Header></Header>
    <main class="container">
      <div class="row">
        <Sidebar :listpages="listpages" @get-one-post="getOnePost"></Sidebar>
        <Content :onepost="onepost"></Content>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'
import GLOBAL from '@/components/lib/Global.js'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'Sidebar': Sidebar,
    'Content': Content
  },
  data() {
    return {
      listpages: this.getListPages(),
      onepost: this.getOnePost(0)
    }
  },
  methods: {
    getOnePost(index) {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({ 'id': index, 'method': 'get' }),
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
          console.log(response.data.vars);

        })
        .catch(error => {
          console.log('-----error-------');
          console.log(error);
        });
      //this.listpages.splice(index, 1);
    },
    getListPages() {
      axios
        .get(GLOBAL.REST_LISTPAGES)
        .then(response => {
          this.listpages = response.data;
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  color: #131313;
  font-family: "Gotham Pro";
}
</style>
