<!-- 인트로 -->

<template>
  <v-row class="text-center background-gray" justify="center">
    <v-col cols="12" class="pt-0">
      <v-img
        :src="require('@/assets/image/light.jpg')"
        class=""
        contain
        :height="mainPhotoSize"
      />
    </v-col>

    <v-col class="mt-9 mb-8" cols="8">
      <DDay>
      </DDay>
    </v-col>

    <v-col class="" cols="12">
      <v-divider style="border-color: rgba(255, 255, 255, 0.8);"></v-divider>
    </v-col>

    <v-col
      class="mt-9 mb-8"
      cols="12"
    >
      <div class="mb-3">
        <img
          :src="require('@/assets/image/heart.png')"
          class=""
          height="16"
          style="max-width: 18px;"
        />
      </div>
      <div class="mb-3">
        <span class="headline font-weight-bold mb-3">
          이 동 찬  &  고 혜 영
        </span>
      </div>
      <div class="mb-3">
        <span>인사말......</span>
      </div>
    </v-col>

    <v-col class="" cols="12">
      <v-divider style="border-color: rgba(255, 255, 255, 0.8);"></v-divider>
    </v-col>

    <v-col
      class="mt-9 mb-8"
      cols="12"
    >
      <div class="mb-3">
        <img
          :src="require('@/assets/image/heart.png')"
          class=""
          height="16"
          style="max-width: 18px;"
        />
        <img
          :src="require('@/assets/image/heart.png')"
          class="ml-1"
          height="16"
          style="max-width: 18px;"
        />
      </div>
      <div class="mb-3">
        <span class="span-title" style="width: 230px; display: inline-flex;">故 <b>이상학·오영임</b>의 아들</span>
        <span class="span-title"><b>동찬</b></span>
      </div>
      <div>
        <span class="span-title" style="width: 230px; display: inline-flex;"><b>고문석·안신자</b>의 딸</span>
        <span class="span-title"><b>혜영</b></span>
      </div>
    </v-col>

  </v-row>
</template>

<script>
import DDay from '@/components/DDay'

export default {
  name: 'Intro',
  created() {},
  mounted() {
    this.mainPhotoSize = this.windowWidth + 250;
  },
  beforeDestroy() {},
  props: {
    windowHeight: {
      type: Number,
      required: false,
      default: 0,
    },
    windowWidth: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  watch: {
    windowWidth: {
      deep: true,
      handler() {
        this.mainPhotoSize = this.windowWidth + 250;
      },
    },
  },
  components: {
    DDay
  },
  methods: {
  },
  data: () => ({
    mainPhotoSize: 600
  }),
}
</script>

<style scoped>
  .background-gray {
    background-color: rgba(0, 0, 0, 0.5);
  }

  span {
    cursor: default;
  }

  .span-title {
    font-size: 1.3rem !important;
    font-weight: 400;
  }
</style>