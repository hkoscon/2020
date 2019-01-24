<style lang="scss">
  .cfp-form {
    width: 100%;
    height: 100vh;
    &__container {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
</style>

<template>
  <main class="section">
    <div class="container cfp-form__container">
      <h3 class="title is-3">
        Call for Proposals
      </h3>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdI3TSOzLvH3XxN72GBASXZpfev51iUSdefngz_13HX3M66Sg/viewform"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        class="cfp-form"
      />
    </div>
  </main>
</template>

<script>
export default {
  name: 'CFPPage',
};
</script>
