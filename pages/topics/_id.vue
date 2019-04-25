<style lang="scss">
  .topicPage {
    &__header {
      padding-bottom: 0 !important;
      padding-top: 100px !important;
    }

    &__title {
      color: $theme-blue;
    }

    &__icon {
      display: inline-block;
      vertical-align: middle;
    }

    &__meta {
      margin-top: .6rem;
      margin-bottom: .6rem;
      &__text {
        display: inline-block;
        vertical-align: middle;
      }
    }
    &__meta__list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        margin: 0;
        padding: 0.5em 1em 0.5em 0;
      }
    }

    &__description {
      padding: 0 1.5rem;
    }

    &__section {
      padding: 2.5rem 1.5rem;
      &--meta {
        padding-top: .8rem !important;
        padding-bottom: .8rem !important;
        @include media("<=tablet") {
          margin-left: 0 !important;
        }
      }
    }

    &__bookmark {
      cursor: pointer;
      &::before {
        content: 'bookmark_border';
        will-change: content;
      }
      &:hover::before {
        content: 'bookmark';
      }
    }
    &__share {
      background-color: white;
      padding: .5rem;
      display: flex;
      justify-content: space-evenly;
      max-width: 500px;
      margin: 0 auto;
      flex-wrap: wrap;
      &__button {
        background-color: #eee;
        padding: 1.7rem;
        border-color: #dbdbdb;
        border-width: 1px;
        border-radius: 4px;
        vertical-align: middle;
        display: inline-block;
        text-align: center;
        margin: .5rem;
        &__logo {
          width: 2em;
          height: 2em;
        }
        &--twitter {
          color: #1CA1F2;
          will-change: background-color, color;
          &:hover {
            background-color: #1CA1F2;
            color: white;
          }
        }
        &--linkedin {
          color: #1178B3;
          &:hover {
            background-color: #1178B3;
            color: white;
          }
        }
        &--pinterest {
          color: #E30B2B;
          &:hover {
            background-color: #E30B2B;
            color: white;
          }
        }
        &--plurk {
          color: #FF574D;
          &:hover {
            background-color: #FF574D;
            color: white;
          }
        }
      }
    }
    .authorcard {
      margin-bottom: 1em;
    }
  }
</style>

<template>
  <main class="topicPage">
    <section class="hero is-medium">
      <div class="hero-body topicPage__header">
        <div class="container">
          <h1 class="title topicPage__title">
            {{ topic.display }}
          </h1>
          <div class="topicPage__actions">
            <!--
            <button class="button is-reverse is-fab">
              <span
                v-if="canSave"
                class="icon"
              >
                <i class="material-icons topicPage__bookmark" />
              </span>
            </button>
            -->
            <button
              @click="shareModal = true"
              class="button is-reverse is-fab"
            >
              <span
                class="icon"
              >
                <i class="material-icons">share</i>
              </span>
            </button>
            <div
              :class="{ 'is-active': shareModal }"
              class="modal"
            >
              <div
                @click="shareModal = false"
                class="modal-background"
              />
              <div class="modal-content">
                <div class="topicPage__share">
                  <a
                    :href="twitterShareLink"
                    target="_blank"
                    class="topicPage__share__button topicPage__share__button--twitter"
                  >
                    <span class="icon is-medium">
                      <i class="fa fa-twitter fa-2x" />
                    </span>
                  </a>
                  <a
                    :href="linkedInShareLink"
                    target="_blank"
                    class="topicPage__share__button topicPage__share__button--linkedin"
                  >
                    <span class="icon is-medium">
                      <i class="fa fa-linkedin-square fa-2x" />
                    </span>
                  </a>
                  <a
                    :href="linkedInShareLink"
                    target="_blank"
                    class="topicPage__share__button topicPage__share__button--pinterest"
                  >
                    <span class="icon is-medium">
                      <i class="fa fa-pinterest fa-2x" />
                    </span>
                  </a>
                  <a
                    :href="plurkShareLink"
                    target="_blank"
                    class="topicPage__share__button topicPage__share__button--plurk"
                  >
                    <figure class="image topicPage__share__button__logo">
                      <img src="https://s.plurk.com/0fb4e821ff17e6c109ad18afe0002cdd.png">
                    </figure>
                  </a>
                </div>
              </div>
              <button
                @click="shareModal = false"
                class="modal-close is-large"
                aria-label="close"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section topicPage__section topicPage__section--meta">
      <div class="container">
        <div class="topicPage__meta">
          <i class="material-icons topicPage__icon">
            event
          </i>
          <span class="topicPage__meta__text">
            {{ topic.date }} (Day {{ topic.day }}) ~ {{ topic.startTime }} - {{ topic.endTime }}
          </span>
        </div>
        <div class="topicPage__meta">
          <i class="material-icons topicPage__icon">
            explore
          </i>
          <span class="topicPage__meta__text">
            {{ topic.venue.name || '' }}
          </span>
        </div>
        <div class="topicPage__meta">
          <ul class="topicPage__meta__list">
            <li>
              <i class="material-icons topicPage__icon">
                comment
              </i>
              <span class="topicPage__meta__text">
                {{ topic.language }}
              </span>
            </li>
            <li>
              <i class="material-icons topicPage__icon">
                network_check
              </i>
              <span class="topicPage__meta__text">
                {{ topic.level }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="topicPage__description">
      <div class="container">
        <div v-html="topic.description" />
      </div>
    </section>
    <div class="section topicPage__section">
      <div class="container">
        <author-card
          v-for="speaker in topic.speakers"
          :key="speaker.name"
          :speaker="speaker"
        />
      </div>
    </div>
  </main>
</template>

<script>
import striptags from 'striptags';
import { fetchTopicById } from '../../utils/fetchTopic';

function truncStr(str, n) {
  return (str.length > n) ? `${str.substr(0, n - 1)}...` : str;
}

export default {
  name: 'TopicPage',
  head() {
    const title = `${this.topic.display} | Hong Kong Open Source Conference 2019`;
    const description = truncStr(striptags(this.topic.description).replace(/[\n\r]+/, ' '), 250);
    let image = '';
    image = this.topic.speakers.reduce((accumulator, currentValue) => {
      if (typeof currentValue.thumbnail !== 'undefined' && currentValue.thumbnail !== '') {
        return currentValue.thumbnail;
      }
      return accumulator;
    }, image);
    if (image === '') {
      image = 'https://hkoscon.org/logo.png';
    }
    return {
      title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:image', property: 'og:image', content: image },
      ],
    };
  },
  components: {
    AuthorCard: () => import('~/components/topic/AuthorCard.vue'),
  },
  data() {
    return {
      canSave: true,
      shareModal: false,
      hostname: 'hkoscon.org',
    };
  },
  computed: {
    speakers() {
      return this.topic.speakers.map(({ name }) => name).join(', ');
    },
    shareLink() {
      return `https://${this.hostname}${process.env.PUBLIC_PATH}/topic/${this.id}?utm_medium=share&utm_campaign=website_share`;
    },
    twitterShareLink() {
      const shareUrl = `${this.shareLink}&utm_source=twitter`;
      const text = `${this.speakers} in going to deliver ${this.topic.display} in HKOSCon 2019`;
      return `https://twitter.com/share?text=${encodeURIComponent(text)}&via=hkoscon&hashtags=${encodeURIComponent('hkoscon,hkoscon2019')}&url=${encodeURIComponent(shareUrl)}`;
    },
    linkedInShareLink() {
      const shareUrl = `${this.shareLink}&utm_source=linkedin`;
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    },
    plurkShareLink() {
      const shareUrl = `${this.shareLink}&utm_source=plurk`;
      const text = `${shareUrl} (${this.topic.display} | Hoog Kong Open Source Conference)`;
      return `http://www.plurk.com/?qualifier=shares&status=${encodeURIComponent(text)}`;
    },
  },
  asyncData({ params: { id }, error }) {
    return fetchTopicById(id)
      .then(topic => ({ topic, id }) || error(404));
  },
  mounted() {
    this.hostname = window.location.host;
  },
};
</script>
