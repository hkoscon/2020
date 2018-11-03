<style scoped lang="scss">
  .tab-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 1 1 auto;
    position: relative;
    padding: 0 12px 1rem;
    overflow: hidden;
    cursor: pointer;
    vertical-align: middle;
    width: 50%;

    &.active {
      border-bottom: 3px solid $theme-yellow;
      padding-bottom: calc(1rem - 3px);
    }

    > .tab-content {
      height: 100%;
      transform: translateZ(0);
      transition: opacity 0.1s cubic-bezier(0.4, 0.0, 1, 1);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex: 1 1 auto;
      > span {
        justify-content: center;
        align-items: center;
        flex-direction: column;
        display: flex;
        padding: 0 14px;
        color: #212121;
        text-decoration: none;
      }
    }
  }
</style>

<template>
  <div
    :class="{ active }"
    class="tab-item"
    @click="$emit('click')">
    <div class="tab-content">
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
