<template>
  <section :class="[xclass, `${rootClassName}`]">
    <Sidebar :xclass="`${rootClassName}-sidebar`" />
    <GMap
      ref="gMap"
      :zoom="zoom"
      :center="{ lat: lat, lng: long }"
      :options="mapOptions"
      :cluster="{ options: { styles: clusterStyle } }"
      @click="deactivate()"
    >
      <GMapMarker
        v-for="(location, index) in incidents"
        :key="location.id"
        :position="{
          lat: noise(location.geocoding.lat),
          lng: noise(location.geocoding.long)
        }"
        :options="markerOptions"
        @click="activate(location, index)"
      >
      </GMapMarker>
    </GMap>
    <button @click="home()"></button>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { dark as darkMapStyle } from './style'
import Sidebar from '~/modules/sidebar/Sidebar.vue'
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  components: {
    Sidebar
  },
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
        mapTypeControl: false,
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
            'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/packages/markerclustererplus/images/m3.png',
          width: 66,
          height: 66,
          textColor: '#fff'
        }
      ],
      markerOptions: {
        icon:
          'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/packages/markerclustererplus/images/m3.png'
      },
      highlightedMarkerOptions: {
        icon:
          'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/packages/markerclustererplus/images/m2.png'
      }
    }
  },
  computed: {
    ...mapGetters({
      incidents: 'global/incidents',
      activeIncident: 'global/activeIncident'
    })
  },
  mounted() {},
  methods: {
    ...mapActions({
      updateActiveIncident: 'global/setActiveIncident'
    }),
    printDate: (date) => {
      const thisDate = new Date(date)
      if (thisDate <= 0) return 'date unknown'
      return thisDate.toLocaleDateString()
    },
    noise: (coord) => {
      const scale = 2 * 0.001
      return parseFloat(coord) + scale * (Math.random() - 0.5)
    },
    activate(incident, storeIndex) {
      // lets get messy
      this.$refs.gMap.markers.forEach((marker, index) => {
        marker.setOptions(this.markerOptions)
        if (storeIndex === index) {
          marker.setOptions(this.highlightedMarkerOptions)
        }
      })
      this.updateActiveIncident(incident)
    },
    home() {
      this.$refs.gMap.map.panTo({ lat: 39.8097343, lng: -98.5556199 })
      this.$refs.gMap.map.setZoom(5)
    },
    deactivate() {
      this.$refs.gMap.markers.forEach((marker, index) => {
        marker.setOptions(this.markerOptions)
      })
      this.updateActiveIncident(null)
    }
  }
}
</script>

<style lang="scss">
.#{$CLASSNAME_PREFIX}-mMap {
  display: flex;

  &-sidebar {
    flex-basis: 22%;
    height: calc(100vh - #{$header-height});
    overflow-y: scroll;
  }

  .GMap {
    flex-basis: 78%;
    height: calc(100vh - #{$header-height});

    &__Wrapper {
      width: 100%;
      height: 100%;
    }

    &.is-active {
      transform: scale(2);
    }
  }

  button {
    position: absolute;
    top: calc(100vh - 40px - 80px - 25px);
    left: calc(100vw - 50px);
    height: 40px;
    width: 40px;
    background: url('../../assets/home.png');
    border: #777;
  }
}

.content-card {
  display: block;
  align-items: center;
  padding-right: 12px;
  padding-left: 0;

  .row {
    padding-top: 5px;
    padding-bottom: 17px;

    p {
      margin-left: 10px;
      text-align: left;
    }

    .Tweet {
      display: inherit;
    }
  }

  h4 {
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
  }
}
</style>
