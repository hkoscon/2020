<style scoped lang="scss">
  .hour {
    font-size: 1.3rem;

    @include media(">tablet") {
      font-size: 2rem;
    }
  }

  .startTime {
    margin-top: 16px;
    padding: 8px 16px;
    letter-spacing: -0.04em;
    color: #737373;
  }
  .events,.timeslot {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    @include media("<=tablet") {
      flex-direction: column;
    }
  }

  .timeslot {
    margin: 1rem auto;
  }

  .events {
    flex: 1;
  }
</style>

<template>
  <div class="timeslot is-flex">
    <div class="startTime">
      <span class="hour">{{ hour }}</span>
      <span class="minute">{{ minute }}</span>
    </div>
    <div class="events is-flex">
      <event-item
        v-for="event in timeslot.events"
        :key="event.internal"
        :event="event"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeslotRow',
  components: {
    EventItem: () => import('./EventItem.vue'),
  },
  props: {
    timeslot: {
      type: Object,
      required: true,
    },
  },
  computed: {
    hour() {
      return this.timeslot.startTime.split(':')[0];
    },
    minute() {
      return this.timeslot.startTime.split(':')[1];
    },
  },
};
</script>
