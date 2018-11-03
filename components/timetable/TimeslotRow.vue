<style scoped lang="scss">
  .startTime {
    margin-top: 16px;
    padding: 8px 16px;
    letter-spacing: -0.04em;
    color: $theme-blue;
    @include media("<=tablet") {
      > span {
        border-bottom: 3px solid $theme-yellow;
        padding: .2rem .5rem 0;
      }
    }
    .hour {
      font-size: 1.3rem;

      @include media(">tablet") {
        font-size: 2rem;
      }
    }
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
    <span class="startTime">
      <span>
        <span class="hour">{{ hour }}</span>
        <span class="minute">{{ minute }}</span>
      </span>
    </span>
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
