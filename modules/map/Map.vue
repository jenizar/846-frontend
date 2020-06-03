<template>
  <GMap
    ref="gMap"
    :zoom="zoom"
    :center="{ lat: lat, lng: long }"
    :options="mapOptions"
  ></GMap>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
    items: {
      type: Array
    },
    xclass: {
      type: String
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-mMap`,
      lat: 39.8097343,
      long: -98.5556199,
      zoom: 5,
      mapOptions: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'none'
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.GMap__Wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
