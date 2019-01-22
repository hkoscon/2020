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
import axios from 'axios';

const uri = 'https://hkoscon.org/2018/data/timetable.json';

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
    return axios.get(uri)
      .then(({ data: { days } }) => ({ days }));
  },
  data() {
    return {
      days: [],
    };
  },
  mounted() {
    if (process.env.NODE_ENV === 'production') {
      this.fetchData();
    }
  },
  methods: {
    fetchData() {
      return axios.get(uri)
        .then(({ data: { days } }) => {
          this.days = days;
        });
    },
  },
};
</script>
