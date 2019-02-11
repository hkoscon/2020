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
