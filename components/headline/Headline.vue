<template>
  <div :class="`${rootClassName}`">
    <h2 :class="`${rootClassName}`">
      {{ topline }}
    </h2>
    <span :class="`${rootClassName}-subline`">{{ subline }}</span>
  </div>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
    topline: {
      type: String,
      default() {
        return 'Headline'
      }
    },
    subline: {
      type: String,
      default() {
        return 'Subline'
      }
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-headline`
    }
  }
}
</script>

<style lang="scss">
.dfb-bp-header {
  font-size: 38px;
}
</style>
