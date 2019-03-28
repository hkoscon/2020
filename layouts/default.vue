<style lang="scss">
  .defaultLayout {
    &__navbar {
      z-index: 1;
      position: fixed;
      width: 100%;
      background: white;
      box-shadow: 0 2px 2px;
      min-height: 3rem;
    }
    &__container {
      display: flex;
      width: 100%;
      margin: auto;
      flex-grow: 1;
      height: 100%;
      @include media(">tablet") {
        width: 70%;
        max-width: 1000px;
        justify-content: space-between;
      }
    }
    &__brand {
      width: 36px;
      height: 36px;
      cursor: pointer;
      display: inline-flex;

      padding-top: .5rem;
      padding-bottom: .5rem;
    }
    &__menu {
      display: none !important;
      @include media(">tablet") {
        display: flex !important;
      }
    }
    &__trigger {
      cursor: pointer;
      padding-top: .5rem;
      padding-bottom: .5rem;
      &:hover, &.is-active, &.is-active > .defaultLayout__trigger {
        background: #eee !important;
      }
    }
    &__dropdown {
      background: white;
      border-radius: 0;
      width: 200%;
      left: -50%;
      text-align: center;
      box-shadow: 0 3px 4px;
      > .navbar-item {
        white-space: normal;
        @include media(">tablet") {
          padding-right: 1rem !important;
        }
        &:hover {
          background: #eee !important;
        }
      }
    }
  }
</style>

<template>
  <div
    @click="handleClick"
    class="defaultLayout"
  >
    <nav class="navbar defaultLayout__navbar">
      <div class="defaultLayout__container">
        <div class="navbar-brand">
          <nuxt-link to="/" class="navbar-item">
            <figure class="image is-square is-32x32">
              <img src="~assets/images/brand.png">
            </figure>
          </nuxt-link>
        </div>
        <div class="navbar-menu defaultLayout__menu">
          <div class="navbar-end">
            <div
              class="navbar-item has-dropdown defaultLayout__trigger"
              :class="{ 'is-active': showProgram }"
            >
              <span
                class="navbar-link is-arrowless defaultLayout__trigger"
                tabindex=""
                @click.prevent.stop="showProgram = !showProgram"
              >Program</span>
              <div class="navbar-dropdown defaultLayout__dropdown">
                <nuxt-link to="/topics" class="navbar-item">Call for Paper Result</nuxt-link>
                <nuxt-link to="/cfc" class="navbar-item">Call for Community Result</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nuxt />
    <page-footer />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    PageFooter: () => import('~/components/PageFooter.vue'),
  },
  data() {
    return {
      showNavbar: false,
      showProgram: false,
      showArchive: false,
      showAbout: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
    handleClick() {
      this.showProgram = false;
      this.showArchive = false;
    },
  },
};
</script>
