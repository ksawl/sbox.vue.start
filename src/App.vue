<template>
  <main id="app" class="h-100">
    <Header></Header>
    <section class="page-wrap container h-100">
      <div class="row h-100">
        <Sidebar :listpages="listpages" @get-post-index="getOnePost" @get-post-title="setTitle"></Sidebar>
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
      onepost: this.getOnePost(0),
      title: 'Wellcome!'
    }
  },
  methods: {
    setTitle(title) {
      this.title = title;
    },
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
          //console.log(response.data.vars);

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
  background-color: #fff;
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
