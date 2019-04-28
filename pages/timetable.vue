<template>
  <main class="timetablePage">
    <page-banner title="Schedule" />
    <div class="container">
      <schedule-table
        v-if="days.length > 0"
        :days="days"
      />
    </div>
  </main>
</template>

<script>
import fetchTopic from '../utils/fetchTopic';

export default {
  name: 'TimetablePage',
  head: {
    title: 'Schedule | Hong Kong Open Source Confernce 2019',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Schedule | Hong Kong Open Source Conference 2019' },
      { hid: 'description', name: 'description', content: 'The timetable for the Hong Kong Open Source Conference 2019.' },
    ],
  },
  components: {
    ScheduleTable: () => import('~/components/timetable/ScheduleTable.vue'),
    PageBanner: () => import('~/components/PageBanner.vue'),
  },
  asyncData() {
    return fetchTopic();
  },
  data() {
    return {
      days: [],
    };
  },
};
</script>
