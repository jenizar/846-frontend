<template>
  <GMap
    ref="gMap"
    :zoom="zoom"
    :center="{ lat: lat, lng: long }"
    :options="mapOptions"
    :cluster="{ options: { styles: clusterStyle } }"
  >
    <GMapMarker
      v-for="location in incidents"
      :key="location.id"
      :position="{
        lat: location.geocoding.lat,
        lng: location.geocoding.long
      }"
      :options="markerOptions"
    >
      <GMapInfoWindow>
        <div class="content-card animate_fadeInDown">
          <div class="row-pt-md">
            <h3>{{ location.title }}</h3>
            <span>
              {{
                location.description === ''
                  ? 'date unknown'
                  : location.description
              }}
            </span>
          </div>
          <div class="row-pt-md">
            <ul>
              {{
                location.links
              }}
            </ul>
          </div>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
  </GMap>
</template>

<script>
import { mapGetters } from 'vuex'
import { dark as darkMapStyle } from './style'
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
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
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'cooperative',
        styles: darkMapStyle
      },
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m3.png',
          width: 66,
          height: 66,
          textColor: '#fff'
        }
      ],
      markerOptions: {
        icon:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m3.png'
      }
    }
  },
  computed: {
    ...mapGetters({
      incidents: 'global/incidents'
    })
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss">
.GMap__Wrapper {
  width: 100vw;
  height: calc(100vh - #{$header-height});
}
</style>
