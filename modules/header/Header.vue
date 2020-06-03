<template>
  <header :class="[xclass, `${rootClassName}`]">
    This is a header. test!
    <div :class="`${rootClassName}-child`">Child</div>
  </header>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
    xclass: {
      type: String
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-header`
    }
  }
}
</script>

<style lang="scss"></style>
