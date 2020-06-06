<template>
  <div>
    <div v-if="type == 'title'" :class="`${rootClassName}--title`">
      <p>{{ content }}</p>
    </div>
    <div v-else-if="type == 'body'" :class="`${rootClassName}--body`">
      <p>{{ content }}</p>
    </div>
    <div v-else-if="type == 'link'" :class="`${rootClassName}--link`">
      <a :href="href">{{ content }}</a>
    </div>
  </div>
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
    },
    type: {
      type: String,
      default() {
        return 'body'
      }
    },
    href: {
      type: String,
      default() {
        return ''
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
  &--title {
    margin-top: 0.5em;
    font-size: 20px;
    font-weight: 500;
  }
  &--body {
    margin-top: 1.5rem;
    font-size: 14px;
    font-weight: 400;
  }
  &--link {
    margin-top: 4rem;
    font-size: 16px;
    font-weight: 700;
    font-style: underline;
    a {
      color: white;
    }
  }
}
</style>
