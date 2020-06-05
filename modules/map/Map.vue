<template>
  <section :class="[xclass, `${rootClassName}`]">
    <Sidebar :xclass="`${rootClassName}-sidebar`" />
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
          lat: noise(location.geocoding.lat),
          lng: noise(location.geocoding.long)
        }"
        :options="markerOptions"
      >
        <GMapInfoWindow>
          <div class="content-card">
            <h4>
              {{ location.title }}
            </h4>
            <div class="row">
              <p>
                {{ printDate(location.date) }}
              </p>
            </div>
            <div class="row">
              <div v-for="link in location.links">
                <a :href="link">
                  {{ link }}
                </a>
                <div v-if="isTweet(link)">
                  <Tweet :id="getTweetID(link)"></Tweet>
                </div>
              </div>
            </div>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMap>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { Tweet } from 'vue-tweet-embed'
import { dark as darkMapStyle } from './style'
import Sidebar from '~/modules/sidebar/Sidebar.vue'
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  components: {
    Sidebar,
    Tweet
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
  methods: {
    printDate: (date) => {
      const thisDate = new Date(date)
      if (thisDate <= 0) return 'date unknown'
      return thisDate.toLocaleDateString()
    },
    isTweet: (link) => {
      return link.match('status/[0-9]+$') !== null
    },
    getTweetID: (link) => {
      return link.match('status/[0-9]+$')[0].replace('status/', '')
    },
    noise: (coord) => {
      const scale = 2 * 0.001
      return parseFloat(coord) + scale * (Math.random() - 0.5)
    }
  }
}
</script>

<style lang="scss">
.#{$CLASSNAME_PREFIX}-mMap {
  display: flex;

  &-sidebar {
    flex-basis: 20%;
    height: calc(100vh - #{$header-height});
  }

  .GMap {
    flex-basis: 80%;
    height: calc(100vh - #{$header-height});

    &__Wrapper {
      width: 100%;
      height: 100%;
    }
  }
}
.content-card {
  display: block;
  align-items: center;
  padding-left: 0px;
  padding-right: 12px;

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
