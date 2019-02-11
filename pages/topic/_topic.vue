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
    }

    &__meta__text {
      display: inline-block;
      vertical-align: middle;
    }

    &__description {
      padding: 0 1.5rem;
    }

    &__section {
      padding: 2.5rem 1.5rem;
      &--meta {
        margin-left: 3rem !important;
        padding-top: .8rem !important;
        padding-bottom: .8rem !important;
      }
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
          <i class="material-icons topicPage__icon">
            comment
          </i>
          <span class="topicPage__meta__text">
            English
          </span>
        </div>
        <div class="topicPage__meta">
          <i class="material-icons topicPage__icon">
            network_check
          </i><span class="topicPage__meta__text">
            Intermediate
          </span>
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
import { fetchTopicById } from '../../utils/fetchTopic';

export default {
  name: 'TopicPage',
  components: {
    AuthorCard: () => import('~/components/topic/AuthorCard.vue'),
  },
  asyncData({ params: { topic }, error }) {
    return fetchTopicById(topic)
      .then(t => ({ topic: t }) || error(404));
  },
};
</script>
