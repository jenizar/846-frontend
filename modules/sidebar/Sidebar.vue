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
      <a href="https://github.com/2020PB/police-brutality">
        Contribute on GitHub
      </a>
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
      <div class="media">
        <BCard>
          <BTabs
            content-class="inside-tab"
            nav-class="nav"
            nav-wrapper-class="tab-list"
            active-nav-item-class="active-nav"
            active-tab-class="active-tab"
            pills
            card
          >
            <BTab title="Video" title-item-class="tab">
              World!
            </BTab>
            <BTab title="Social Media" title-item-class="tab">
              Reddit!
            </BTab>
            <BTab title="Sources" title-item-class="tab">
              BLM!
            </BTab>
          </BTabs>
        </BCard>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
// import { Tweet } from 'vue-tweet-embed'
// import VueCoreVideoPlayer from 'vue-core-video-player'
import { BTabs, BTab, BCard } from 'bootstrap-vue'
import Headline from '~/components/headline/Headline.vue'
import Paragraph from '~/components/paragraph/Paragraph.vue'
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  components: {
    BCard,
    BTab,
    BTabs,
    Headline,
    Paragraph
    // Tweet
    // Player: VueCoreVideoPlayer
  },
  props: {
    xclass: {
      type: String
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-mSidebar`,
      tweetOptions: { cards: 'hidden' }
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
    },
    truncateLink: (link) => {
      if (link.length < 55) return link
      return link.substring(0, 55) + '...'
    },
    isTweet: (link) => {
      return link.match('status/[0-9]+') !== null
    },
    getID: (link) => {
      return link.match('status/[0-9]+')[0].replace('status/', '')
    },
    countNonTweets: (location) => {
      let count = 0
      location.links.forEach((link) => {
        if (link.match('status/[0-9]+') == null) count++
      })
      return count
    },
    countTweets: (location) => {
      let count = 0
      location.links.forEach((link) => {
        if (link.match('status/[0-9]+') !== null) count++
      })
      return count
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
  a {
    color: white;
    font-size: 17px;
    font-weight: 700;
  }
  .media {
    .tab {
      a {
        margin: 0.25rem 0.25rem 0.25rem 0.5rem;
        padding: 0.5rem 1rem;
        background-color: $pb-gray-900;
        border-top: 2px #050303 solid;
        border-bottom: 0px solid;
        border-radius: 8px 8px 0px 0px;
        font-size: 20px;
        text-decoration: none;
        color: #7b7b7b;
        outline: none;
      }
      .active-nav {
        background-color: $pb-gray-900;
        color: #db9a00;
        outline: none;
      }
    }
    .tab:hover {
      a {
        color: #eeeeee;
      }
      .active-nav {
        color: #db9a00;
      }
    }
    .nav {
      display: flex;
      padding: 1.25rem 0.25rem 0.5rem 0.25rem;
      background-color: #050303;
      border-radius: 5px 5px 0px 0px;
    }
    .tab-list {
      display: inline;
    }
    .inside-tab {
      padding: 1rem 1rem 1rem 1rem;
      background-color: #050303;
      color: #dddddd;
      border-radius: 0px 0px 5px 5px;
      border-top: 6px solid $pb-gray-900;
    }
  }
}
</style>
