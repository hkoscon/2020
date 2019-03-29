<style lang="scss">
  .pageBanner {
    padding-top: 3rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @include media(">=desktop") {
      width: 70%;
      max-width: 1000px;
    }
  }
</style>

<template>
  <div class="pageBanner">
    <h1 class="title is-2">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'PageBanner',
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
