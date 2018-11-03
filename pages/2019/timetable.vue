<style scoped lang="scss">
  @include media(">=tablet") {
    .hero {
      padding-top: 52px;
    }
  }
</style>

<template>
  <main>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Schedule</h1>
        </div>
      </div>
    </section>
    <loading-indicator :loading="loading">
      <div class="container">
        <schedule-table
          v-if="days.length > 0"
          :days="days"
        />
      </div>
    </loading-indicator>
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
    LoadingIndicator: () => import('~/components/LoadingIndicator.vue'),
    ScheduleTable: () => import('~/components/timetable/ScheduleTable.vue'),
  },
  asyncData() {
    return axios.get(uri)
      .then(({ data: { days } }) => ({ days }));
  },
  data() {
    return {
      loading: false,
      days: [],
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      return axios.get(uri)
        .then(({ data: { days } }) => {
          this.loading = false;
          this.days = days;
        });
    },
  },
};
</script>
