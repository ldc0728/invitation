<template>
  <v-container class="">
    <v-row class="text-center" justify="center">
      <v-col cols="12" class="" v-show="currentPage == 'Intro'">
        <Intro
          :windowHeight.sync="windowHeight"
          :windowWidth.sync="windowWidth"
        >
        </Intro>
      </v-col>
      <v-col cols="12" class="" v-show="currentPage == 'Gallery'">
        <Gallery
          :windowHeight.sync="windowHeight"
          :windowWidth.sync="windowWidth"
        >
        </Gallery>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Gallery from './module/Gallery.vue';
import Intro from './module/Intro.vue';

export default {
  name: 'Main',
  created() {},
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() {},
  props: {
    currentPage: {
      type: String,
      required: true,
      default: "Intro",
    },
  },
  components: {
    Intro,
    Gallery
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight
      this.windowWidth = window.innerWidth
    }
  },
  data: () => ({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth,
  }),
}
</script>

<style scoped>

</style>