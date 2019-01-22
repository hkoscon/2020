<style scoped lang="scss">
  .hero {
    background-image: url(https://hkoscon.org/2018/images/banner.jpg);
    background-size: cover;
    background-position: center 30%;
    .hero-body {
      background-color: rgba(0,0,0,.5);
    }
    .title {
      color: white;
    }
    @include media("<=tablet") {
      padding-top: 52px;
    }
  }
</style>

<template>
  <main>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Schedule
          </h1>
        </div>
      </div>
    </section>
    <LoadingIndicator :loading="loading">
      <div class="container">
        <ScheduleTable
          v-if="days.length > 0"
          :days="days"
        />
      </div>
    </LoadingIndicator>
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
