<template>
  <v-app-bar
    app
    color="#FFF"
    height="110"
    style="opacity: 0.8;"
  >
    <v-row dense align="center" justify="center" class="text-center">
      <v-col cols="12" class="" align="center">
        <Logo @onSetPage="onSetPage"/>
      </v-col>
      <v-col style="font-size: .85em; font-weight: 600;">
        <span class="mr-9" @click="onSetPage('Gallery')">GALLERY</span>
        <span class="mr-9" @click="onSetPage('About')">ABOUT</span>
        <span class="" @click="onSetPage('ContactUs')">CONTACT US</span>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import Logo from '@/components/Logo.vue';

export default {
  name: 'Header',
  created() {},
  mounted() {

  },
  beforeDestroy() {},
  components: {
    Logo
  },
  methods: {
    onSetPage(page) {
      this.$emit("setPage", page);
    }
  },
  data: () => ({
    
  }),
}
</script>
