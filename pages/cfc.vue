<style lang="scss">
  .cfc {
    &__container {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    &__list {
      list-style-type: none;
      padding: 0;
      margin: 1.5em 0;
    }
    &__list__item {
      display: block;
      padding: 0.6em 1em;
      background-color: rgba(0, 0, 0, 0.1);
    }
    &__list__item:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
</style>

<template>
  <main class="section">
    <div class="container cfc__container">
      <h1 class="title is-3">
        Call for Communities Result
      </h1>
      <p>
        Thanks for the overwhelming responses from open source communities.
      </p>
      <p>
        The following communities would participate in HKOSCon 2020 (in alphabetic order):
      </p>
      <ul class="cfc__list">
        <li class="cfc__list__item">Agile HK</li>
        <li class="cfc__list__item">COSCUP</li>
        <li class="cfc__list__item">GDG (Google Developer Group) </li>
        <li class="cfc__list__item">FtO (Facing to Ocean) </li>
        <li class="cfc__list__item">G0Vhk</li>
        <li class="cfc__list__item">Open Culture Station</li>
        <li class="cfc__list__item">Cloud Native Taiwan User Group</li>
        <li class="cfc__list__item">MySQL community</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Call for Communities Result',
  head: {
    title: 'Call for Communities Result | Hong Kong Open Source Conference 2020',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Call for Communities Result | Hong Kong Open Source Conference 2020' },
    ],
  },
};
</script>
