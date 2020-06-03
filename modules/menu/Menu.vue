<template>
  <div :class="[xclass, `${rootClassName}`]">
    <Navigation :class="`${rootClassName}-navigation`" :items="mainNav.items" />
  </div>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'
import Navigation from '~/components/navigation/Navigation.vue'

export default {
  components: {
    Navigation
  },
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
      rootClassName: `${GlobalClassNames.PREFIX}-m-menu`,
      isOpen: false,
      mainNav: {
        items: []
      }
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss"></style>
