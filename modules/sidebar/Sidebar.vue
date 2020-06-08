<template>
  <aside :class="[xclass, `${rootClassName}`]">
    <div
      :class="`${rootClassName}-content ${rootClassName}-content--intro`"
      v-if="!activeIncident"
    >
      <Headline content="What's this about?" />
      <Paragraph
        content="This interactive map showcases incidents with police enforcing unnecessary actions against citizens during the protests after the murder of George Floyd. Click on the markers on the map to learn more about each incident."
      />
      <Paragraph
        content="Work on this site is ongoing and still in progress. We are always looking for contributors in the fields of Backend, Frontend and Data Analysis."
      />
      <Paragraph content="" type="spacer" />
      <a href="https://github.com/2020PB/police-brutality">
        Contribute on GitHub
      </a>
      <div class="icons">
        <a :href="Endpoints.FACEBOOK" class="btn">
          <Facebook class="logo" />
        </a>
        <a :href="Endpoints.INSTAGRAM" class="btn">
          <Instagram class="logo" />
        </a>
        <a :href="Endpoints.TWITTER" class="btn">
          <Twitter class="logo" />
        </a>
        <a :href="Endpoints.REDDIT" class="btn">
          <Reddit class="logo" />
        </a>
        <a :href="Endpoints.GITHUB" class="btn">
          <GitHub class="logo" />
        </a>
      </div>
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
      <div :class="'media'" :key="activeIncident.id">
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
            <div v-if="getEvidence(activeIncident) !== null">
              <BTab title="Video" title-item-class="tab" lazy>
                <div v-for="url in getEvidence(activeIncident)">
                  <div class="video-container">
                    <Media
                      :kind="'video'"
                      :controls="true"
                      :src="url"
                      style="{ border-radius: 10px; border: 1px solid #303030; align-self: center; width: 100%; }"
                    >
                    </Media>
                  </div>
                </div>
              </BTab>
            </div>
            <div v-if="countTweets(activeIncident) > 0">
              <BTab title="Social Media" title-item-class="tab" lazy>
                <div v-for="link in activeIncident.links" v-if="isTweet(link)">
                  <div class="container">
                    <Tweet :id="getID(link)" widget-class="tweet" />
                  </div>
                </div>
              </BTab>
            </div>
            <BTab title="Sources" title-item-class="tab" lazy>
              <div v-for="link in activeIncident.links" class="para">
                <Paragraph type="link" :href="link" :content="link" />
              </div>
            </BTab>
          </BTabs>
        </BCard>
      </div>
      <div class="icons">
        <a :href="Endpoints.FACEBOOK" class="btn">
          <Facebook class="logo" />
        </a>
        <a :href="Endpoints.INSTAGRAM" class="btn">
          <Instagram class="logo" />
        </a>
        <a :href="Endpoints.TWITTER" class="btn">
          <Twitter class="logo" />
        </a>
        <a :href="Endpoints.REDDIT" class="btn">
          <Reddit class="logo" />
        </a>
        <a :href="Endpoints.GITHUB" class="btn">
          <GitHub class="logo" />
        </a>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import { Tweet } from 'vue-tweet-embed'
import Media from '@dongido/vue-viaudio'
import { BTabs, BTab, BCard } from 'bootstrap-vue'
import Facebook from '~/assets/svg/facebook.svg'
import Instagram from '~/assets/svg/instagram.svg'
import Twitter from '~/assets/svg/twitter.svg'
import Reddit from '~/assets/svg/reddit.svg'
import GitHub from '~/assets/svg/github.svg'
import Headline from '~/components/headline/Headline.vue'
import Paragraph from '~/components/paragraph/Paragraph.vue'
import { Endpoints, ClassNames as GlobalClassNames } from '~/shared/constants'

export default {
  components: {
    BCard,
    BTab,
    BTabs,
    Headline,
    Media,
    Paragraph,
    Tweet,
    Facebook,
    Instagram,
    Twitter,
    Reddit,
    GitHub
  },
  props: {
    xclass: {
      type: String
    }
  },
  data() {
    return {
      rootClassName: `${GlobalClassNames.PREFIX}-mSidebar`,
      tweetOptions: { cards: 'hidden' },
      Endpoints
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
    },
    getEvidence(location) {
      const evidences = location.evidence
        .map((evidence) => (evidence !== null ? evidence.video : null))
        .map((vids) => (vids !== null && vids.length > 0 ? vids[0] : null))
        .map((video) => (video !== null ? video.streams : null))
        .map((strms) => (strms !== null && strms.length > 0 ? strms[0] : null))
        .map((stream) => (stream !== null ? stream.url : null))
        .filter((url) => url !== null)
      return evidences.length === 0 ? null : evidences
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
    padding-left: 10px;
  }
  .media {
    .active-tab {
      max-height: 52vh;
      overflow-y: scroll;
      align-items: center;
      display: flex;
      flex-direction: column;
      max-width: 100%;
      .para {
        align-self: start !important;
      }
      .video-container {
        margin: 4% 4% 4% 4%;
      }
      .container {
        margin: 0% 1% 0% 1%;
        display: block;
        max-width: 22vw;
        width: 22vw;
        overflow: hidden;
        .tweet {
          padding: 5px;
          width: 100%;
        }
      }
    }
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
      a {
        padding-left: 0px !important;
      }
    }
  }
  .icons {
    width: calc(28vw - 60px);
    height: 50px;
    position: absolute;
    left: 30px;
    bottom: 15px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    .btn {
      margin: 0rem 1rem 0rem 1rem;
      padding: 0;
      display: inline;
      align-self: center;
      height: 40px;
      width: 40px;
    }
    .logo {
      height: 40px;
      width: 40px;
      fill: #bbbbbb;
    }
  }
}
</style>
