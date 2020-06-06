<template>
  <aside :class="[xclass, `${rootClassName}`]">
    <Headline content="What's this about?" />
    <Paragraph
      content="This interactive map showcases incidents with police enforcing unecessary actions against protesters during the Riots after the murder of George Floyd. Click on the markers on the map to learn more about each incident."
    />
    <Paragraph
      content="Work on this site is ongoing and still in progress. We are always looking for contributors in the fields of Backend, Frontend and Data Analysis."
    />
    <a
      :class="`${rootClassName}-link`"
      href="https://github.com/2020PB/police-brutality"
      target="_blank"
    >
      Contribute on GitHub
    </a>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import Headline from '~/components/headline/Headline.vue'
import Paragraph from '~/components/paragraph/Paragraph.vue'
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  components: {
    Headline,
    Paragraph
  },
  props: {
    xclass: {
      type: String
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-mSidebar`
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
.#{$CLASSNAME_PREFIX}-mSidebar {
  z-index: 1000;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px;
  color: $pb-white;
  background-color: $pb-gray-900;

  &-link {
    margin-top: 4rem;
    color: white;
  }
}
</style>
