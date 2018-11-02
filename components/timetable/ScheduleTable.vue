<style scoped lang="scss">
  @keyframes fading-transition {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .fade-transition-enter-active {
    animation: fading-transition .5s;
  }

  .fade-transition-leave-active {
    animation: fading-transition .1s;
  }

  .tabs {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    overflow: hidden;
    user-select: none;

    &.sticky {
      position: fixed;
      top: 52px;
      background-color: white;
      z-index: 1;
      padding-top: .5rem;
    }

    > .tab-container {
      touch-action: pan-y;
      position: relative;
      height: 100%;
      white-space: nowrap;
      overflow: hidden;
      flex: 1 1 auto;
      > .content {
        position: absolute;
        white-space: nowrap;
        height: 100%;
        flex-basis: auto;
      }
    }
  }
</style>

<template>
  <div>
    <div
      ref="tabs"
      :class="{ sticky }"
      class="tabs"
    >
      <div class="tab-container">
        <div class="content">
          <tab-item
            v-for="day in days"
            :key="day.date"
            :day="day"
            :active="day.day === activeDay"
            @click="activeDay = day.day"
          />
        </div>
      </div>
    </div>
    <template v-for="day in days">
      <transition
        :key="day.date"
        name="fade-transition"
        mode="out-in"
      >
        <day-table
          v-show="activeDay === day.day"
          :day="day"
        />
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ScheduleTable',
  components: {
    TabItem: () => import('./TabItem.vue'),
    DayTable: () => import('./DayTable.vue'),
  },
  props: {
    days: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeDay: 1,
      sticky: false,
    };
  },
  mounted() {
    const offset = this.$refs.tabs.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 52;
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= offset) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    });
  },
};
</script>
