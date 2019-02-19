<style lang="scss">
  .pageBanner {
    background-size: cover;
    background-position: center 30%;
    @include media("<=tablet") {
      padding-top: 52px;
    }
    &__overlay {
      background-color: rgba(0,0,0,.5);
    }
    &__title {
      color: white;
    }
  }
</style>

<template>
  <section
    :style="{backgroundImage}"
    class="hero is-medium pageBanner"
  >
    <div class="hero-body pageBanner__overlay">
      <div class="container">
        <h1 class="title pageBanner__title">
          {{ title }}
        </h1>
      </div>
    </div>
  </section>
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
  data() {
    return {
      backgroundImage: `url(${process.env.publicPath}/images/banner.jpg)`,
    };
  },
};
</script>
