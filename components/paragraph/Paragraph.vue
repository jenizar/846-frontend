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
    <div v-else-if="type == 'spacer'" :class="`${rootClassName}--spacer`"></div>
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
    color: white;
  }

  &--body {
    padding-right: 10px;
    margin-top: 1.5rem;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
  }

  &--link {
    margin-top: 1rem;
    overflow-wrap: anywhere;

    a {
      font-size: 16px !important;
      font-style: none !important;
      font-weight: 400 !important;
      color: #ddd !important;
    }
  }

  &--spacer {
    padding-top: 3rem;
  }
}
</style>
