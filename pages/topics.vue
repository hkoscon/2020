<style lang="scss">
  .topicsPage {
    &__table {
      margin-top: 1rem;
    }
    &__line {
      font-size: 1.2rem;
    }
  }
</style>

<template>
  <main>
    <page-banner title="Topics" />
    <div class="section">
      <div class="container">
        <div class="content">
          <p class="topicsPage__line">
            This is the list of topics being selected by the program team.
          </p>
          <table class="table is-striped topicsPage__table">
            <tbody>
              <tr
                v-for="topic in topics"
                :key="topic.internal"
              >
                <td>
                  <topic-wrapper :event="topic">
                    <span>{{ topic.display }}</span>
                  </topic-wrapper>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { fetchTopics } from '../utils/fetchTopic';

export default {
  name: 'TopicsPage',
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
    TopicWrapper: () => import('~/components/timetable/TopicWrapper'),
  },
  asyncData() {
    return fetchTopics().then(topics => ({ topics }));
  },
};
</script>
