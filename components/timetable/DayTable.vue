<template>
  <div class="day">
    <timeslot-row
      v-for="timeslot in day.timeslots"
      :key="timeslot.startTime"
      :timeslot="timeslot"
    />
  </div>
</template>

<script>
export default {
  name: 'DayTable',
  components: {
    TimeslotRow: () => import('./TimeslotRow.vue'),
  },
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
};
</script>
