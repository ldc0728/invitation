<template>
  <v-app>
    <Header/>

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  created() {},
  mounted() {},
  beforeDestroy() {},
  components: {
    Header,
    Footer
  },
  data: function () {
    return {
      
    }
  }
}
</script>