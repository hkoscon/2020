<style lang="scss">
  .timeslotRow {
    margin: 1rem auto;
    &, &__events {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      @include media("<=tablet") {
        flex-direction: column;
      }
    }
    &__events {
      flex: 1;
    }

    &__time {
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

      &__hour {
        font-size: 1.3rem;

        @include media(">tablet") {
          font-size: 2rem;
        }
      }
    }
  }
</style>

<template>
  <div class="timeslotRow is-flex">
    <span class="timeslotRow__time">
      <span>
        <span class="timeslotRow__time__hour">
          {{ hour }}
        </span>
        <span class="timeslotRow__time__minute">
          {{ minute }}
        </span>
      </span>
    </span>
    <div class="timeslotRow__events is-flex">
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
