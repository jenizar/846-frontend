<template>
  <Map :incidents="incidents" />
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
  },
  asyncData({ $axios }) {
    return $axios
      .get('https://846policebrutality.b-cdn.net/api/incidents')
      .then((res) => {
        return {
          incidents: res.data.data
        }
      })
  }
}
</script>

<style lang="scss"></style>
