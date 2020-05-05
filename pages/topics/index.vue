<style lang="scss">
  .topicsPage {
    .content p {
      font-size: 1.2rem;
      margin: 1em 0;
    }
    .topics {
      margin: 1em 0;
      ul {
        list-style-type: none;
        padding: 0;
        li {
          padding: 0;
          margin: 0;
          a {
            display: block;
            padding: 0.5em 1em;
            background: rgba(0, 0, 0, 0.1);
            text-decoration: none;
            color: rgba(0, 0, 0, 1);
            transition: opacity 0.3s;
          }
          a:hover {
            opacity: 0.7;
          }
          &:nth-child(even) {
            a{
              background: rgba(0, 0, 0, 0.05);
            }
          }
        }
      }
    }
  }
</style>

<template>
  <main class="topicsPage">
    <page-banner title="Topics" />
    <div class="section">
      <div class="container">
        <div class="content">
          <p>
            We are pleased to announce the CFP results. We have received 17 submissions before our deadline.
          </p>
          <p>
            Here is the list of the accepted CFP topics, along with some invited sessions &amp; confirmed sponsor sessions:
          </p>
          <div class="topics">
            <ul>
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
    </div>
  </main>
</template>

<script>
import { fetchTopics } from '../../utils/fetchTopic';

export default {
  name: 'TopicsPage',
  head: {
    title: 'Topics | Hong Kong Open Source Conference 2020',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Topics | Hong Kong Open Source Conference 2020' },
      { hid: 'description', name: 'description', content: 'We are pleased to announce the CFP results. We have received 60 submissions before our deadline March 4...' },
    ],
  },
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
    TopicWrapper: () => import('~/components/timetable/TopicWrapper'),
  },
  asyncData() {
    return fetchTopics().then(topics => ({ topics }));
  },
};
</script>
