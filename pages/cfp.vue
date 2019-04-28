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
      <h1 class="title is-3">
        Call for Proposals
      </h1>
      <p>Thanks for interested in submitting topics. Our 2019 Call for Proposal was closed.</p>
      <p>Please find the results <nuxt-link to="/topics">here</nuxt-link>.</p>
      <!--
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdI3TSOzLvH3XxN72GBASXZpfev51iUSdefngz_13HX3M66Sg/viewform"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        class="cfp-form"
      />
      -->
    </div>
  </main>
</template>

<script>
export default {
  name: 'CFPPage',
  head: {
    title: 'Call for Proposals | Hong Kong Open Source Confernce 2019',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Call for Proposals | Hong Kong Open Source Conference 2019' },
      { hid: 'description', name: 'description', content: 'Thanks for interested in submitting topics. Our 2019 Call for Proposal was closed.' },
    ],
  },
};
</script>
