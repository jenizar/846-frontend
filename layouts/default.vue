<template>
  <div :class="`${rootClassName}-app`">
    <Header />
    <main :class="`${rootClassName}-content`">
      <nuxt />
    </main>
  </div>
</template>

<script>
import { ClassNames as GlobalClassNames } from '~/shared/constants'
import Header from '~/modules/header/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-l`
    }
  }
}
</script>

<style lang="scss"></style>
