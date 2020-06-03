<template>
  <nav :class="[xclass, `${rootClassName}`]">
    <ul :class="`${rootClassName}-level`">
      <li v-for="item in items" :key="item" :class="`${rootClassName}-element`">
        <nuxt-link :class="`${rootClassName}-link`" :to="item.href">
          <span :class="`${rootClassName}-label`">
            Nav Item Label
          </span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
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
      rootClassName: `${GlobalClassNames.PREFIX}-c-navigation`,
      isOpen: false
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss"></style>
