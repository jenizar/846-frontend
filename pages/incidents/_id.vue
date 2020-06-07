<template>
  <Map />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapGetters({
      incidents: 'global/incidents'
    })
  },
  mounted() {
    const hit = this.incidents.find(
      (incident) => incident.id === this.$route.params.id
    )
    this.updateActiveIncident(hit)
  },
  methods: {
    ...mapActions({
      updateActiveIncident: 'global/setActiveIncident'
    })
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

<style lang="scss"></style>
