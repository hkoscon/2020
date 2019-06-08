<style lang="scss">
  .tabItem {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    cursor: pointer;
    padding: 0 5em;
    width: 50%;
    &--active {
      border-bottom: 3px solid $theme-yellow;
    }
  }
</style>

<template>
  <div
    :class="{ 'tabItem--active': active }"
    @click="$emit('click')"
    class="tabItem"
  >
    <div class="tabItem__content">
      <span>Day {{ day.day }} ({{ day.date }})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabItem',
  props: {
    day: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
