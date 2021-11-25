<template>
  <v-row class="pa-0 ma-0" justify="center">
    <v-img
      :src="require('@/assets/image/rose-left.png')"
      contain
      height="60"
      style="max-width: 60px;"
      class="mr-5"
    >
    </v-img>
    <div style="border: 2px solid #AAA; width: 50px; height: 60px;" @click="onSetPage('Intro')">
      <span style="vertical-align: top;" class="mr-1 mt-1">DC</span>
      <v-divider vertical inset style="border-color: #AAA;">
      </v-divider>
      <span style="vertical-align: bottom;" class="ml-1">HY</span>
    </div>
    <v-img
      :src="require('@/assets/image/rose-right.png')"
      contain
      height="60"
      style="max-width: 60px;"
      class="ml-5"
    >
    </v-img>
  </v-row>
</template>

<script>
export default {
  name: 'Logo',
  created() {},
  mounted() {

  },
  beforeDestroy() {},
  components: {

  },
  methods: {
    onSetPage(page) {
      this.$emit('onSetPage', page);
    }
  },
  data: () => ({
    
  }),
}
</script>

<style scoped>
span {
  font-size: .6em;
  font-weight: 800;
  writing-mode: vertical-rl;
  text-orientation: upright;
  cursor: default;
}
</style>