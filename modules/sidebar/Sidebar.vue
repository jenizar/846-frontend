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
        <div v-if="countTweets(activeIncident) > 0">
          <div class="section-header">Twitter Feed</div>
        </div>
        <div v-for="link in activeIncident.links" v-if="isTweet(link)">
          <div class="tweet-spacer"></div>
          <Tweet :id="getID(link)" :options="tweetOptions"></Tweet>
        </div>
        <div v-if="countTweets(activeIncident) > 0">
          <div class="content-spacer"></div>
        </div>
        <div
          v-if="
            countTweets(activeIncident) > 0 &&
              countNonTweets(activeIncident) > 0
          "
        >
          <div class="section-header">Other Sources</div>
        </div>
        <div v-else-if="countNonTweets(activeIncident) > 0">
          <div class="section-header">Links to Sources</div>
        </div>
        <div v-for="link in activeIncident.links" v-if="!isTweet(link)">
          <Paragraph :content="link" type="link" :href="link" />
        </div>
        <div v-if="countNonTweets(activeIncident) > 0">
          <div class="content-spacer"></div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import { Tweet } from 'vue-tweet-embed'
import Headline from '~/components/headline/Headline.vue'
import Paragraph from '~/components/paragraph/Paragraph.vue'
import { ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  components: {
    Headline,
    Paragraph,
    Tweet
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
    .section-header {
      padding-top: 40px;
      font-size: 28px;
      font-weight: 700;
    }
    .content-spacer {
      padding-top: 40px;
    }
    .tweet-spacer {
      padding-top: 10px;
    }
    hr {
      margin-top: -1px;
      margin-left: -10px;
      border-color: #666;
      width: calc(100% + 15px);
      ::after {
        padding-top: 0px;
        padding-bottom: 20px;
      }
    }
  }
}
</style>
