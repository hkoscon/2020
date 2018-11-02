<style scoped lang="scss">
  .card {
    @include media("<=tablet") {
      width: 100%;
      margin: .5rem 0;
    }
    height: 100%;

    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    > .card-footer {
      padding: 1rem;
      flex-wrap: wrap;
      > .speaker {
        margin-bottom: .2rem;
      }
    }
  }

  .info:not(:last-child) {
    &::after {
      content: ' /';
    }
  }

  .speaker {
    .title {
      font-size: 1rem;
    }
    .subtitle {
      font-size: .8rem;
    }
  }
  a {
    display: block;
    flex: 1;
    margin: 0 .5rem;
  }
</style>

<template>
  <topic-wrapper :event="event">
    <div class="card is-flex">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-6">{{ event.display }}</p>
            <p
              class="subtitle is-6">
              <span
                v-if="event.language"
                class="info">{{ event.language }}</span>
              <span
                v-if="event.level"
                class="info">{{ event.level }}</span>
              <span>{{ event.venue.name }}</span>
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="event.speakers && event.speakers.length > 0"
        class="card-footer speakers">
        <div
          v-for="speaker in event.speakers"
          :key="speaker.name"
          class="speaker">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="speaker.thumbnail">
              </figure>
            </div>
            <div class="media-content">
              <p class="title">{{ speaker.name }}</p>
              <p class="subtitle">
                <span
                  v-if="speaker.community"
                  class="info">{{ speaker.community }}</span>
                <span
                  v-if="speaker.country"
                  class="info">{{ speaker.country }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </topic-wrapper>
</template>

<script>
export default {
  name: 'EventItem',
  components: {
    TopicWrapper: () => import('./TopicWrapper'),
  },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  computed: {
    link() {
      if (!this.event.internal || !this.event.topic) {
        return '#';
      }
      const url = new URL(this.event.internal);
      return url.pathname.replace('/event/', '/2019/topic/');
    },
  },
};
</script>
