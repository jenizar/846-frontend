<template>
  <div class="container">
    <h1>{{ error.statusCode }}: {{ error.message }}</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  /**
   * Warning: Though this file is placed in the layouts folder, it should be treated as a page.
   * @see https://nuxtjs.org/guide/views/#error-page
   */
  props: {
    error: {
      type: Object,
      default() {
        return {
          message: 'Undefined error.'
        }
      }
    }
  }
}
</script>
