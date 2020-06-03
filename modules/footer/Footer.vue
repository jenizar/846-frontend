<template>
  <footer :class="[xclass, `${rootClassName}`]"></footer>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  props: {
    navElements: {
      type: Array
    },
    xclass: {
      type: String
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-mFooter`
    }
  }
}
</script>

<style lang="scss"></style>
