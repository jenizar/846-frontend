<template>
  <header :class="[xclass, `${rootClassName}`]">
    846 – Police Brutality Across the United States of America
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
      rootClassName: `${GlobalClassNames.PREFIX}-mHeader`
    }
  }
}
</script>

<style lang="scss">
.#{$CLASSNAME_PREFIX}-mHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $header-height;
  font-weight: 800;
  color: $pb-white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: $pb-black;
}
</style>
