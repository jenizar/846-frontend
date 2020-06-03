<template>
  <GMap ref="gMap" :zoom="zoom" :center="{ lat: lat, lng: long }">
    <GMapMarker :position="{ lat: lat, lng: long }"></GMapMarker>
  </GMap>
</template>

<script>
export default {
  data() {
    return {
      lat: 0,
      long: 0,
      zoom: 2
    }
  },
  mounted() {
    this.$geolocation.getCurrentPosition().then((position) => {
      console.log(position)
      this.lat = position.coords.latitude
      this.long = position.coords.longitude
      this.zoom = 16
    })
  }
}
</script>

<style lang="scss">
.GMap__Wrapper {
  width: 100vw;
  height: 100vh;
}
</style>
