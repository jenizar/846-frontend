<template>
  <GMap
    ref="gMap"
    :zoom="zoom"
    :center="{ lat: lat, lng: long }"
    :options="mapOptions"
    :cluster="{ options: { styles: clusterStyle } }"
  ></GMap>
</template>

<script>
import { dark as darkMapStyle } from './style'
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
        gestureHandling: 'none',
        styles: darkMapStyle
      },
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ]
    }
  },
  mounted() {
    console.log(this.mapOptions)
  },
  methods: {}
}
</script>

<style lang="scss">
.GMap__Wrapper {
  width: 100vw;
  height: calc(100vh - #{$header-height});
}
</style>
