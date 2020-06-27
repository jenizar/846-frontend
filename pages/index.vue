<template>
  <Map />
</template>

<script>
import Map from '~/modules/map/Map.vue'

export default {
  components: {
    Map
  },
  data() {
    return {
      locations: []
    }
  },
  validate({ params }) {
    /**
     * Making sure that only matching brands are shown.
     * If a URL contains a non-match, 404 will be thrown
     * and the user will be redirected accordingly.
     */
    return true
  }
}
</script>

<style lang="scss">
html {
  background-color: $pb-black;
}
</style>
