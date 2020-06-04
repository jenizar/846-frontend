<template>
  <div :class="`${rootClassName}`">
    <h2 :class="`${rootClassName}--h2`">
      {{ content }}
    </h2>
  </div>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
    content: {
      type: String,
      default() {
        return 'Headline'
      }
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-cHeadline`
    }
  }
}
</script>

<style lang="scss">
.#{$CLASSNAME_PREFIX}-cHeadline {
  &--h2 {
    font-size: 38px;
    font-weight: 800;
    line-height: 1.2;
  }
}
</style>
