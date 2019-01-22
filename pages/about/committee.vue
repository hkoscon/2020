<style lang="scss">
  .aboutCommitteePage {
    &__member {
      list-style-type: disc;
      list-style-position: inside;
    }
  }
</style>

<template>
  <main>
    <page-banner title="Committee" />
    <section class="section">
      <div class="container content">
        <div>
          <h3 class="title is-3">Web</h3>
          <ul class="aboutCommitteePage__member">
            <li>Koala Yeung</li>
            <li>
              <a href="https://gitlab.com/404busters" target="_blank">Team 404 Busters</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutCommitteePage',
  components: {
    PageBanner: () => import('~/components/PageBanner.vue'),
  },
};
</script>
