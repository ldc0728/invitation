<template>
  <div>
    <v-row class="ma-0" style="border: 6px solid rgba(255, 255, 255, 1); border-bottom: none;">
      <v-col class="pb-0">
        <span style="font-size: 1.2rem;">Wedding on</span><br/>
        <span class="ml-2" style="font-size: 1.1rem;">2022.11.11 14:00</span>
      </v-col>
    </v-row>
    <v-row class="ma-0">
      <v-col>
        <span style="font-size: 1.5rem;">D - Day</span>
      </v-col>
    </v-row>
    <v-row class="ma-0" style="border: 6px solid rgba(255, 255, 255, 1); border-top: none;">
      <v-col class="pt-0">
        <span style="font-size: 2.0rem;">{{dday}}</span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'DDay',
    data: () => ({
      dday: 365,
    }),
  }
</script>

<style scoped>
  span {
    color: white;
    font-weight: 600;
    cursor: default;
  }
</style>