<template>
  <v-app>
    <Header
      @setPage="setPage"
    >
    </Header>

    <v-main>
      <router-view
        :currentPage="currentPage"
      />
    </v-main>

  </v-app>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  created() {},
  mounted() {},
  beforeDestroy() {},
  components: {
    Header
  },
  methods: {
    setPage(page) {
      this.currentPage = page;
    }
  },
  data: () => ({
    currentPage: "Intro"
  }),
}
</script>