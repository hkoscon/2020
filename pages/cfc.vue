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
      <h3 class="title is-3">
        Call for Communities Result
      </h3>
      <p>
        Thanks for the overwhelming responses from open source communities.
      </p>
      <p>
        The following communities would participate in HKOSCon 2019 (in alphabetic order):
      </p>
      <ul class="cfc__list">
        <li class="cfc__list__item">Haxe Foundation</li>
        <li class="cfc__list__item">Hong Kong R Group</li>
        <li class="cfc__list__item">Hong Kong WordPress Meetup</li>
        <li class="cfc__list__item">Japanese Raspberry Pi Users Group</li>
        <li class="cfc__list__item">Mozilla</li>
        <li class="cfc__list__item">MySQL Open Source Database</li>
        <li class="cfc__list__item">自由香港字型</li>
        <li class="cfc__list__item">開源工場</li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Call for Communities Result',
  head: {
    title: 'Call for Communities Result | Hong Kong Open Source Conference 2019',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Call for Communities Result | Hong Kong Open Source Conference 2019' },
    ],
  },
};
</script>
