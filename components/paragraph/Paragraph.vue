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
    padding-left: 10px;
    padding-right: 10px;
    text-align: justify;
  }

  &--body {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 3rem;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
    align-self: start !important;
    text-align: left !important;
  }

  &--link {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 10px;
    padding-right: 10px;
    align-self: start !important;
    a {
      font-size: 16px !important;
      font-style: none !important;
      font-weight: 400 !important;
      color: #ddd !important;
      word-break: break-all;
      text-align: left !important;
      align-self: start !important;
    }
  }

  &--spacer {
    padding-left: 10px;
    padding-top: 2rem;
  }
}
</style>
