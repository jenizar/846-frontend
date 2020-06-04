<template>
  <p :class="`${rootClassName}`">
    {{ content }}
  </p>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
    content: {
      type: String,
      default() {
        return 'Content'
      }
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-cParagraph`
    }
  }
}
</script>

<style lang="scss">
.#{$CLASSNAME_PREFIX}-cParagraph {
  margin-top: 1.5rem;
  line-height: 1.5;
}
</style>
