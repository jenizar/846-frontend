<template>
  <aside :class="[xclass, `${rootClassName}`]">
    <div
      :class="`${rootClassName}-content ${rootClassName}-content--intro`"
      v-if="!activeIncident"
    >
      <Headline content="What's this about?" />
      <Paragraph
        content="This interactive map showcases incidents with police enforcing unecessary actions against protesters during the Riots after the murder of George Floyd. Click on the markers on the map to learn more about each incident."
      />
      <Paragraph
        content="Work on this site is ongoing and still in progress. We are always looking for contributors in the fields of Backend, Frontend and Data Analysis."
      />
      <Paragraph content="" type="spacer" />
      <Paragraph
        content="Contribute on GitHub"
        href="https://github.com/2020PB/police-brutality"
        type="link"
      />
    </div>
    <div
      :class="`${rootClassName}-content ${rootClassName}-content--intro`"
      v-else
    >
      <Headline
        :content="`${activeIncident.city}, ${activeIncident.state}`"
        :date="printDate(activeIncident.date)"
      />
      <Paragraph :content="activeIncident.title" type="title" />
      <Paragraph content="" type="spacer" />
      <div v-for="link in activeIncident.links">
        <Paragraph :content="link" type="link" :href="link" />
      </div>
    </div>
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
      incidents: 'global/incidents',
      activeIncident: 'global/activeIncident'
    })
  },
  methods: {
    printDate: (date) => {
      const thisDate = Date.parse(date)
      if (thisDate < 0) return 'date unknown'
      return new Intl.DateTimeFormat('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(thisDate)
    }
  }
}
</script>

<style lang="scss">
.#{$CLASSNAME_PREFIX}-mSidebar {
  z-index: 1000;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  color: $pb-white;
  background-color: $pb-gray-900;
  border-right: #fff;
}
</style>
