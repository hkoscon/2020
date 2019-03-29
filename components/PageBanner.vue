<style lang="scss">
  .pageBanner {
    padding-top: 3rem;
    @include container();
    @include media("<=tablet") {
      margin-left: 1rem;
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
