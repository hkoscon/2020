<style lang="scss">
  .timetablePage {
    &__banner {
      background-image: url(/2019/images/banner.jpg);
      background-size: cover;
      background-position: center 30%;
      @include media("<=tablet") {
        padding-top: 52px;
      }
      &__overlay {
        background-color: rgba(0,0,0,.5);
      }
    }
    &__title {
      color: white;
    }
  }
</style>

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
