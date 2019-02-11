<style lang="scss">
  .topicsPage {
    &__list {
      list-style: disc inside;
    }
  }
</style>

<template>
  <main>
    <page-banner title="Topics" />
    <div class="section">
      <div class="container">
        <div class="content">
          <p>Here is the list of topics being selected by the topics team.</p>
          <ul class="topicsPage__list">
            <li
              v-for="topic in topics"
              :key="topic.internal"
            >
              <topic-wrapper :event="topic">
                <span>{{ topic.display }}</span>
              </topic-wrapper>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import 'core-js/fn/array/flat-map';
import fetchTopic from '../utils/fetchTopic';

export default {
  name: 'TopicsPage',
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
    TopicWrapper: () => import('~/components/timetable/TopicWrapper'),
  },
  asyncData() {
    return fetchTopic();
  },
  computed: {
    topics() {
      const keys = new Map();
      return (this.days || []).flatMap(day => day.timeslots)
        .flatMap(({ events }) => events)
        .filter(({ topic }) => !!topic)
        .sort((left, right) => left.display.localeCompare(right.display))
        .filter((topic) => {
          if (keys.has(topic.internal)) {
            return false;
          }
          keys.set(topic.internal, true);
          return true;
        });
    },
  },
};
</script>
