<style lang="scss">
  .eventItem {
    &__card {
      @include media("<=tablet") {
        width: 100%;
        margin: .5rem 0;
      }
      height: 100%;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12), 0 3px 1px -2px rgba(0, 0, 0, .2);

      background-color: #fefefe;

      display: flex;
      flex-direction: column;
      margin: 0 .5rem;
      flex: 1;
      justify-content: space-between;
    }

    &__speakers {
      padding: 1rem;
      flex-wrap: wrap;

      background-color: lighten($theme-blue, 5%);
    }
    &__speaker {
      margin-bottom: .2rem;
      &__name {
        font-size: 1rem;
      }
      &__meta {
        font-size: .8rem;
      }
      &__name, &__meta {
        color: $theme-yellow;
      }

      &__info:not(:last-child) {
        &::after {
          content: ' /';
        }
      }
    }
    &__content {
      overflow-y: hidden;
    }
  }

  .topicWrapper {
    display: block;
    flex: 1;
  }
</style>

<template>
  <topic-wrapper
    :event="event"
    class="eventItem__link"
  >
    <div class="card is-flex eventItem__card">
      <div class="card-content">
        <div class="media">
          <div class="media-content eventItem__content">
            <p class="title is-6">
              {{ event.display }}
            </p>
            <p
              v-if="event.language || event.level || event.venue.name"
              class="subtitle is-6"
            >
              <span
                v-if="event.language"
                class="info"
              >
                {{ event.language }}
              </span>
              <span
                v-if="event.level"
                class="info"
              >
                {{ event.level }}
              </span>
              <span
                v-if="event.venue.name"
                class="info"
              >
                {{ event.venue.name }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        v-if="event.speakers && event.speakers.length > 0"
        class="card-footer eventItem__speakers"
      >
        <div
          v-for="speaker in event.speakers"
          :key="speaker.name"
          class="eventItem__speaker"
        >
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="speaker.thumbnail">
              </figure>
            </div>
            <div class="media-content eventItem__content">
              <p class="title eventItem__speaker__name">
                {{ speaker.name }}
              </p>
              <p class="subtitle eventItem__speaker__meta">
                <span
                  v-if="speaker.community"
                  class="eventItem__speaker__info"
                >
                  {{ speaker.community }}
                </span>
                <span
                  v-if="speaker.country"
                  class="eventItem__speaker__info"
                >
                  {{ speaker.country }}
                </span>
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
};
</script>
