<template>
  <header :class="[xclass, `${rootClassName}`]">
    Currently reporting
    <span :class="`${rootClassName}-highlight`">
      {{ incidents.length }}
    </span>
    Police Incidents Across the United States of America.
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
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
  },
  computed: {
    ...mapGetters({
      incidents: 'global/incidents'
    })
  }
}
</script>

<style lang="scss">
@media (min-width: 520px) {
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

    &-highlight {
      margin-right: 0.5rem;
      margin-bottom: 0.125rem;
      margin-left: 0.5rem;
      font-size: 1.5rem;
      color: $pb-red;
    }
  }
}
@media (max-width: 520px) {
  .#{$CLASSNAME_PREFIX}-mHeader {
    margin-top: 5px;
    display: block;
    align-items: center;
    justify-content: center;
    height: $header-height;
    font-weight: 800;
    color: $pb-white;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.2px;
    background-color: $pb-black;
    line-height: 1.2;

    &-highlight {
      color: $pb-red;
      font-size: 1.25rem;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
}
</style>
